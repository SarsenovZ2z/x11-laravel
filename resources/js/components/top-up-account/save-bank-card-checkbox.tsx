import InfoIcon from "@/components/ui/icons/info-icon";

export default function SaveBankCardCheckbox({value, onChange}: {
    value: boolean,
    onChange: (value: boolean) => void,
}) {
    return (
        <label className="flex items-baseline gap-3">
            <input
                type="checkbox"
                name="saveCard"
                checked={value}
                onChange={(e) => {
                    onChange(e.target.checked);
                }}
            />
            <p className="text-sm text-[#555770]">
                Запомнить эту карту. Это безопасно. <span
                className="inline-block align-bottom text-[#C7C9D9]"><InfoIcon/></span><br/>
                Сохраняя карту, вы соглашаетесь с <a href="#" className="text-blue-500 whitespace-nowrap"> условиями
                привязки карты.</a>
            </p>
        </label>
    );
}
