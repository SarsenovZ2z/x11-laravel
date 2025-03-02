import DollarIcon from "@/components/ui/icons/dollar-icon";
import RubleIcon from "@/components/ui/icons/ruble-icon";
import CaretIcon from "@/components/ui/icons/caret-icon";

export default function TopUpAmount() {
    return (
        <div>
            <label htmlFor="amount" className="block text-xs uppercase">
                Укажите сумму
            </label>
            <div
                className="flex sm:inline-flex justify-between divide-x mt-2 bg-secondary border rounded-lg text-muted-foreground">
                <div className="flex items-center justify-between w-full px-4 py-3.5">
                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        className="w-20 outline-none"
                        placeholder="0000.00"
                    />
                    <DollarIcon/>
                </div>
                <div className="flex items-center justify-between w-full px-4 py-3.5">
                    <input
                        type="text"
                        className="w-20 outline-none"
                        readOnly={true}
                        disabled={true}
                        placeholder="0000.00"
                    />
                    <div className="flex items-center">
                        <RubleIcon/>
                        <button type="button" aria-label="выбрать другую валюту">
                            <CaretIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
