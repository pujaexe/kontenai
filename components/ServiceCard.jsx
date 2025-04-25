// components/ServiceCard.jsx
"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";

const ServiceCard = ({
  title,
  description,
  points = [],
  ctaText = "Konsultasi Sekarang",
  ctaHref = "#",
  imageSrc,
  headerBg = "#E9E6FA",
  titleColor = "text-indigo-600"
}) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white flex flex-col h-full">
      <div className="flex justify-center items-center py-6" style={{ backgroundColor: headerBg }}>
        <img
          src={imageSrc}
          alt={title}
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h3 className={`text-xl font-semibold mb-2 ${titleColor}`}>{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          {points.length > 0 && (
            <ul className="text-gray-600 mb-6 space-y-2">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <FaCheck className="mt-1 text-indigo-500 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <a
          href={ctaHref}
          className="inline-block w-fit px-6 py-2 text-indigo-600 font-semibold border border-indigo-300 rounded-xl hover:bg-indigo-50 transition"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;