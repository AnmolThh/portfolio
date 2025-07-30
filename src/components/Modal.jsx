const Modal = ({ open, onClose, children }) => (
  <div
    className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-transparent backdrop-blur-[5px]
        transition-opacity duration-200
        ${open ? "opacity-100 " : "opacity-0 pointer-events-none"}
      `}
    onClick={onClose}
  >
    <div
      className={`
        rounded-lg shadow-lg
        transform transition-all duration-300
        ${open ? "scale-100 opacity-100" : "scale-90 opacity-0"}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);
export default Modal;
