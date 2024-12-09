export default function Header() {
    return (
      <div className="relative w-full bg-[#0B0C10] text-white">
        {/* Top Blue Border */}
        <div className="h-[4px] bg-blue-500" />
  
        {/* Content */}
        <div className="flex justify-between items-center py-4 px-8">
          <p className="text-sm">© 2024 YourCompany</p>
          <p className="text-sm">Privacy Policy | Terms of Use</p>
        </div>
      </div>
    );
  }
  
  