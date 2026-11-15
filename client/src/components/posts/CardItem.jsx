
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function CardItem({ item, onDelete, onEdit }) {
  const description = item.description?.replace(/<[^>]*>?/gm, '');

  return (
    <tr>

      <td className="w-[35%] max-w-[350px]">
        <div className="flex items-center gap-3 px-3 py-2 w-full min-w-0">
          <img
            className="w-32 h-24 rounded-[12px] object-cover shrink-0"
            src={item.coverImage}
            alt=""
          />

          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <p className="font-bold text-lg truncate">
              {item.title?.length > 20
                ? item.title.slice(0, 20) + "..."
                : item.title}
            </p>

            <p className="text-gray-500 text-sm break-all">
              {description?.length > 80
                ? description.slice(0, 80) + "..."
                : description}
            </p>
          </div>
        </div>
      </td>

      <td>
        <div
          className={`w-fit mx-auto px-3 py-1.5 rounded-lg font-medium text-center text-sm ${item.category === "Announcement"
              ? "text-[#8200DB] bg-[#F3E8FF]"
              : "bg-[#C4DEFF] text-[#1447E6]"
            }`}
        >
          {item.category}
        </div>
      </td>

      <td className="text-center p-3">
        <div className="flex flex-col items-center">
          <span className="font-medium text-gray-800">{item.date}</span>
          <span className="text-gray-400 text-[11px]">{item.time}</span>
        </div>
      </td>

      <td>
        <div
          className={`mx-auto w-fit text-center text-sm px-3 py-1 rounded-[6px] ${item.status === "Active"
              ? "bg-[#E7FFE1] text-[#145E00]"
              : "bg-[#FFE1E1] text-[#B91C1C]"
            }`}
        >
          {item.status}
        </div>
      </td>

      <td className="text-center">
        <div className="flex w-fit mx-auto items-center gap-2 border border-gray-200 bg-white px-3 py-1.5 rounded-[8px] shadow-sm cursor-pointer hover:border-gray-300">
          <div
            className={`w-2 h-2 rounded-full ${item.publish === "Publish"
                ? "bg-[#1DB100]"
                : "bg-[#F57C11]"
              }`}
          ></div>

          <span className="text-gray-700">{item.publish}</span>
          <IoIosArrowDown size={14} className="text-gray-400 ml-1" />
        </div>
      </td>

      <td className="text-center">{item.author}</td>

      <td>
        <div className="w-full flex items-center justify-center gap-3 px-4 py-12">
          <button
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
            onClick={() => onEdit(item.id)}
          >
            <FaEdit size={20} />
          </button>

          <button
            className="text-red-500 hover:text-red-700 cursor-pointer"
            onClick={() => onDelete(item.id)}
          >
            <FaTrash size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CardItem;
