export default function AddAttendanceButton() {
  return (
    <button className="space-x-1 flex items-center px-4 py-3 bg-[#131313] rounded-full">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.5 4.5C8.5 4.22386 8.27614 4 8 4C7.72386 4 7.5 4.22386 7.5 4.5V7.5H4.5C4.22386 7.5 4 7.72386 4 8C4 8.27614 4.22386 8.5 4.5 8.5H7.5V11.5C7.5 11.7761 7.72386 12 8 12C8.27614 12 8.5 11.7761 8.5 11.5V8.5H11.5C11.7761 8.5 12 8.27614 12 8C12 7.72386 11.7761 7.5 11.5 7.5H8.5V4.5Z"
          fill="white"
        />
      </svg>
      <span className="text-white text-sm font-bold tracking-tighter" aria-label="근무추가">
        근무추가
      </span>
    </button>
  )
}
