import DollarIcon from "@/components/ui/icons/dollar-icon";
import RubleIcon from "@/components/ui/icons/ruble-icon";
import CaretIcon from "@/components/ui/icons/caret-icon";
import {ChangeEventHandler, useRef} from "react";

export default function TopUpAmount({onChange, errors}: {
    onChange: (val: number) => void,
    errors: any,
}) {
    const calculatedRef = useRef<HTMLInputElement>(null);

    const changeEventHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const val = Number(e.target.value);

        if (calculatedRef.current) {
            calculatedRef.current.value = (val * 15).toString();
        }

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
                        onChange={changeEventHandler}
                        placeholder="0000.00"
                        required
                    />
                    <DollarIcon/>
                </div>
                <div className="flex items-center justify-between w-full px-4 py-3.5">
                    <input
                        type="text"
                        ref={calculatedRef}
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
