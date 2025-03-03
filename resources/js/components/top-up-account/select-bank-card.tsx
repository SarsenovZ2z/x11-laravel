import {BankCardEntity} from "@/lib/bank-card/entities/bank-card-entity";
import PlusIcon from "@/components/ui/icons/plus-icon";
import {ReactNode} from "react";

export default function SelectBankCard({cards, value, onChange}: {
    cards: Array<BankCardEntity>,
    value: BankCardEntity | null,
    onChange: (value: BankCardEntity | null) => void,
}) {

    return (
        <div className="w-full overflow-x-auto">
            <div className="flex items-center gap-4">
                {cards.map((card, index) => (
                    <button type="button" key={index} onClick={() => onChange(card)}>
                        <Card card={card} isActive={card.id === value?.id}/>
                    </button>
                ))}
                <button type="button" onClick={() => onChange(null)}>
                    <CreateNewCard isActive={value === null}/>
                </button>
            </div>
        </div>
    );
}

const CreateNewCard = ({isActive}: { isActive: boolean }) => {
    return (
        <CardWrapper isActive={isActive}>
            <div
                className="flex flex-col items-center justify-center w-full h-full gap-1 bg-secondary text-sm text-[#555770] font-semibold">
                <PlusIcon/>
                Новая карта
            </div>
        </CardWrapper>
    );
};

const Card = ({card, isActive}: { card: BankCardEntity, isActive: boolean }) => {
    return (
        <CardWrapper isActive={isActive}>
            <div className="p-2">
                {card.number}<br/>
                {card.expireMonth} / {card.expireYear}
            </div>
        </CardWrapper>
    );
}

const CardWrapper = ({children, isActive = false}: { children: ReactNode, isActive?: boolean }) => {
    return (
        <div className={`${isActive && 'border-2 border-accent'} rounded-xl p-0.5`}>
            <div
                className="flex items-end h-20 w-29 bg-accent/90 rounded-lg text-accent-foreground text-xs leading-5 overflow-clip">
                {children}
            </div>
        </div>
    );
}
