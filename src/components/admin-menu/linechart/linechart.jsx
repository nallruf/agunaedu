import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const LineChart = () => {
  const data = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
      "Jan",
    ],
    datasets: [
      {
        label: "Kelas Berlangsung",
        data: [150, 160, 170, 180, 200, 190, 210, 220, 230, 240, 250, 260],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.raw} Kelas`;
          },
        },
      },
      title: {
        display: true,
        text: "Kelas Berlangsung",
        font: {
          size: 18,
        },
        align: "start",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Bulan",
        },
      },
      y: {
        title: {
          display: true,
          text: "Jumlah Kelas",
        },
        beginAtZero: true,
      },
    },
  };

  const downloadPDF = () => {
    const input = document.getElementById("chartContainer");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("chart.pdf");
    });
  };

  return (
    <div className="border-2 p-6 rounded-xl hidden md:block">
      <div
        className="flex justify-between items-center mb-4"
        style={{ marginBottom: "20px" }}
      >
        <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
          Kelas Berlangsung
        </h2>
        <button
          onClick={downloadPDF}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FFFFFF",
            color: "black",
            border: "1px solid black",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Unduh PDF
        </button>
      </div>
      <div
        id="chartContainer"
        style={{ position: "relative", marginBottom: "20px" }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
