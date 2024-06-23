import React, { useEffect, useState } from "react";
import User from "./user/user";
import { FiUploadCloud } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import TableDashboard from "../../components/admin-menu/tabledashboard/tabledashboard";
import { useAuth } from "../../hooks/useauth";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const columnsTransaction = [
  { header: "ID Pembelian", field: "transactionId", truncate: 50 },
  { header: "Kelas / Event", field: "itemName", truncate: 50 },
  { header: "Harga Kelas", field: "totalPrice", truncate: 50 },
  { header: "Status", field: "transactionStatus", truncate: 50 },
  { header: "Struk Pembayaran", field: "paymentImageUrl", truncate: 0 },
];

const TransactionUserPage = () => {
  const { user } = useAuth();
  const [transactionData, setTransactionData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    document.title = "Aguna Edu | Transaction User";
  }, []);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get("/api/v1/user/transaction", {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        });
        setTransactionData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching transaction", error);
      }
    };

    if (user) {
      fetchTransaction();
    }
  }, [user]);

  useEffect(() => {
    filterData();
  }, [searchTerm, filter, transactionData]);

  const filterData = () => {
    let filtered = transactionData;

    if (searchTerm) {
      filtered = filtered.filter((transaction) =>
        transaction.itemName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter === "accept") {
      filtered = filtered.filter(
        (transaction) => transaction.transactionStatus === "ACCEPT"
      );
    } else if (filter === "unpaid") {
      filtered = filtered.filter(
        (transaction) =>
          transaction.transactionStatus === "UNPAID" ||
          transaction.transactionStatus === "PENDING"
      );
    }

    setFilteredData(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (status) => {
    setFilter(status);
  };

  const dataTransactionWithImages = filteredData.map((transaction) => ({
    ...transaction,
    itemName: (
      <div className="flex flex-col">
        <span>{transaction.itemName}</span>
        <span className="text-sm text-gray-500">
          {transaction.transactionType}
        </span>
      </div>
    ),
    totalPrice: transaction.totalPrice
      ? `Rp ${transaction.totalPrice}`
      : "Free",
    transactionStatus: (
      <span
        className={`px-2 py-1 rounded-full ${
          transaction.transactionStatus === "UNPAID"
            ? "bg-red-100 text-red-500"
            : transaction.transactionStatus === "PENDING"
            ? "bg-yellow-100 text-yellow-500"
            : "bg-green-100 text-green-500"
        }`}
      >
        {transaction.transactionStatus}
      </span>
    ),
    paymentImageUrl: transaction.paymentImageUrl ? (
      <a
        href={`${import.meta.env.VITE_PUBLIC_URL}/images/${
          transaction.paymentImageUrl
        }`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primaryBlue"
      >
        Lihat Struk
      </a>
    ) : (
      "Belum Upload"
    ),
  }));

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginatedData = dataTransactionWithImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(dataTransactionWithImages.length / itemsPerPage);

const exportToPDF = () => {
  const input = document.getElementById("tablenih");

  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("transaction_data_aguna.pdf");
  });
};


  const content = (
    <>
      <div className="flex flex-col gap-2 px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <h1 className="text-textPrimary font-semibold text-lg sm:text-xl">
                Transaksi
              </h1>
              <div className="rounded-full font-medium text-sm bg-[#D2E9FF] text-textSecondary px-2">
                {transactionData.length} Transaksi
              </div>
            </div>
            <span className="text-textTertiary font-semibold">
              Data lengkap transaksi anda
            </span>
          </div>
          <div className="sm:mt-0 sm:ml-auto font-semibold">
            <button
              className="bg-white text-textPrimary border-2 border-borderPrimary py-2 px-4 rounded-lg flex items-center gap-2"
              onClick={exportToPDF}
            >
              <FiUploadCloud />
              Export to PDF
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 flex-wrap gap-4">
        <div className="flex flex-wrap">
          <button
            className={`px-4 py-2 bg-white border text-textLabel font-semibold rounded-l-xl ${
              filter === "all" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleFilter("all")}
          >
            Semua
          </button>
          <button
            className={`px-4 py-2 bg-white border text-textLabel font-semibold ${
              filter === "accept" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleFilter("accept")}
          >
            Sudah Bayar
          </button>
          <button
            className={`px-4 py-2 bg-white border text-textLabel font-semibold rounded-r-xl ${
              filter === "unpaid" ? "bg-gray-100" : ""
            }`}
            onClick={() => handleFilter("unpaid")}
          >
            Belum Bayar
          </button>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CiSearch className="h-6 w-6 text-iconInput" />
            </div>
            <input
              type="text"
              placeholder="Cari"
              name="search"
              id="search"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full sm:w-64 border border-borderPrimary rounded-[8px] px-[14px] py-[10px] focus:outline-none focus:ring-2 focus:ring-primaryBlue shadow-sm pl-10"
            />
          </div>
        </div>
      </div>

      <div id="tablenih">
        <TableDashboard columns={columnsTransaction} data={paginatedData} />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-10 px-4">
        <div className="text-sm">
          Halaman {currentPage} dari {totalPages}
        </div>
        <div className="mt-2 sm:mt-0">
          <button
            className="ml-0 sm:ml-4 px-4 py-2 text-sm border border-borderPrimary rounded-xl text-textPrimary bg-white hover:bg-gray-100"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Sebelumnya
          </button>
          <button
            className="ml-2 px-4 py-2 text-sm border border-borderPrimary rounded-xl text-textPrimary bg-white hover:bg-gray-100"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </>
  );

  return <User content={content} />;
};

export default TransactionUserPage;
