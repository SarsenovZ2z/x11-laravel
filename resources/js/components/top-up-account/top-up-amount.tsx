import DollarIcon from "@/components/ui/icons/dollar-icon";
import RubleIcon from "@/components/ui/icons/ruble-icon";
import CaretIcon from "@/components/ui/icons/caret-icon";
import {ChangeEventHandler, useRef} from "react";

export default function TopUpAmount({onChange, errors}: {
    onChange: (val: number) => void,
    errors: { [index: string]: string | undefined },
}) {

    const convertedAmountRef = useRef<HTMLInputElement>(null);

    const convertToCurrency = (amount: number) => {
        if (!convertedAmountRef.current) {
            return;
        }

        convertedAmountRef.current.value = (amount * 15).toString();
    };

    const onAmountChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const val = Number(e.target.value);

        convertToCurrency(val);
        onChange(val);
    };

    return (
        <div>
            <label htmlFor="amount" className="block text-xs uppercase">
                Укажите сумму
            </label>
            <div
                className={`flex sm:inline-flex justify-between divide-x mt-2 bg-secondary border ${errors['amount'] && 'border-red-500'} rounded-lg text-muted-foreground`}>
                <div className="flex items-center justify-between w-full px-4 py-3.5">
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="w-20 outline-none"
                        onChange={onAmountChange}
                        placeholder="0000.00"
                        required
                    />
                    <DollarIcon/>
                </div>
                <div className="flex items-center justify-between w-full px-4 py-3.5">
                    <input
                        type="text"
                        ref={convertedAmountRef}
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
