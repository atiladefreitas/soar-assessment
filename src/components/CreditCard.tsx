import Image from "next/image";

interface ICardProps {
  variant?: "dark" | "light";
}

export function CreditCard({ variant = "dark" }: ICardProps) {
  return (
    <div
      className={`flex h-[15rem] w-full flex-col justify-between overflow-hidden rounded-[20px] border ${
        variant === "dark"
          ? "bg-gradient-to-br from-[#5B5A6F] to-[#000000] text-white"
          : "bg-white text-[#343C6A]"
      }`}
    >
      <div>
        <div className="flex items-start justify-between px-6 py-3">
          <div className="space-y-1">
            <p
              className={`text-sm ${
                variant === "dark" ? "text-white/70" : "text-[#718EBF]"
              }`}
            >
              Balance
            </p>
            <p className="text-2xl font-semibold">$5,756</p>
          </div>
          <Image
            height={30}
            width={30}
            alt="Card Chip Icon"
            src={
              variant === "dark"
                ? "/icons/chip-card-dark.png"
                : "/icons/chip-card-light.png"
            }
          />
        </div>

        <div className="flex items-start justify-between p-6 py-3">
          <div className="space-y-1">
            <p
              className={`text-xs uppercase ${
                variant === "dark" ? "text-white/70" : "text-[#718EBF]"
              }`}
            >
              Card Holder
            </p>
            <p className="font-medium">Eddy Cusuma</p>
          </div>
          <div className="space-y-1 text-right">
            <p
              className={`text-xs uppercase ${
                variant === "dark" ? "text-white/70" : "text-[#718EBF]"
              }`}
            >
              Valid Thru
            </p>
            <p className="font-medium">12/22</p>
          </div>
        </div>
      </div>

      <div
        className={` ${variant === "dark" ? "bg-white/15" : "border-t border-[#DFEAF2] bg-white"} flex items-center justify-between p-6`}
      >
        <p
          className={`text-xl font-medium tracking-wider ${
            variant === "dark" ? "text-white/90" : "text-[#343C6A]"
          }`}
        >
          3778 **** **** 1234
        </p>

        <Image
          height={40}
          width={40}
          alt="Card Chip Icon"
          src={
            variant === "dark"
              ? "/icons/card-symbol-dark.png"
              : "/icons/card-symbol-light.png"
          }
        />
      </div>
    </div>
  );
}
