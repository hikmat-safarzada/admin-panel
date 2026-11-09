import { FaEdit, FaTrash } from "react-icons/fa";

function CardItem({ item }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3 px-3 py-2">
          <img
            className="w-32 h-24 rounded-[12px] object-cover shrink-0"
            src={item.image}
            alt=""
          />

          <div className="flex flex-col gap-1.5">
            <p className="font-bold text-lg">
              {item.title}
            </p>

            <p className="text-gray-500 text-md line-clamp-3">
              {item.description}
            </p>
          </div>
        </div>
      </td>
      <td>
        <div className={`w-fit mx-auto px-3 py-1.5 rounded-lg font-medium text-center text-sm ${item.category === "Announcement"
          ? "text-[#8200DB] bg-[#F3E8FF]"
          : "bg-[#C4DEFF] text-[#1447E6]"
          }`}>
          {item.category}
        </div>
      </td>
      <td className="text-center">{item.date}</td>
      <td>
        <div className={`mx-auto w-fit text-center text-sm px-3 py-1 rounded-[6px] ${item.status === "Active" ? "bg-[#E7FFE1] text-[#145E00]" : "bg-[#FFE1E1] text-[#B91C1C]"}`}>
          {item.status}
        </div>
      </td>
      <td className="text-center">{item.author}</td>
      <td className="text-center">{item.publish}</td>
      <td>
        <div className="w-full flex items-center justify-center gap-3 px-4 py-12">
          <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
            <FaEdit size={20} />
          </button>

          <button className="text-red-500 hover:text-red-700 cursor-pointer">
            <FaTrash size={20} />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default CardItem