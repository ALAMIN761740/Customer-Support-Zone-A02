import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';

const CustomerTickets = ({ ticket, onSelect }) => {

  const priorityColor =
    ticket.priority === "High"
      ? "text-red-500"
      : ticket.priority === "Medium"
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      
      {/* Title + Status */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-gray-800">
          {ticket.title}
        </h2>
        <span className="text-green-600 text-sm capitalize">
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {ticket.description}
      </p>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-4">

        <div className="flex gap-3 text-sm">
          <span className="font-medium">#{ticket.id}</span>
          <span className={`font-semibold ${priorityColor}`}>
            {ticket.priority}
          </span>
        </div>

        <div className="flex gap-3 text-sm text-gray-500">
          <p>{ticket.customer}</p>
          <div className="flex items-center gap-1">
            <FaRegCalendarAlt className="text-gray-400" /> {ticket.createdAt}
          </div>
        </div>

      </div>

      {/* Add Button */}
      <button
        onClick={() => onSelect(ticket)}
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Add to Task
      </button>

    </div>
  );
};

export default CustomerTickets;