import {ReactNode} from "react";
import PlusIcon from "@/components/ui/icons/plus-icon";
import {BankCardEntity} from "@/lib/bank-card/entities/bank-card-entity";
import InfoIcon from "@/components/ui/icons/info-icon";

export default function ChooseOrCreateBankCard() {
    const cards: Array<BankCardEntity> = [
        {
            id: 1,
            number: "•••• 3282",
            expireMonth: "12",
            expireYear: "26",
        },
    ];

    return (
        <>
            <div className="w-full overflow-x-auto">
                <div className="flex items-center gap-4">
                    {cards.map((card, index) => (
                        <Card key={index} card={card}/>
                    ))}
                    <CreateNewCard isActive={true}/>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row -space-y-4 sm:-space-x-4 sm:space-y-0">
                <CardFrontFormWrapper>
                    <div className="flex flex-col justify-end gap-4 h-full text-xs text-accent-foreground">
                        <div>
                            <label htmlFor="cardNumber" className="uppercase">
                                Номер карты
                            </label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                className="w-full px-4 py-2 mt-2 bg-background rounded-lg text-base placeholder:text-muted-foreground"
                                placeholder="Номер карты"
                            />
                        </div>
                        <div>
                            <label htmlFor="cardExpiresMonth" className="uppercase">
                                Действует до
                            </label>
                            <div className="flex items-center gap-1 mt-2">
                                <input
                                    type="text"
                                    id="cardExpiresMonth"
                                    name="cardExpiresMonth"
                                    className="w-18 px-4 py-2 bg-background rounded-lg text-base placeholder:text-muted-foreground"
                                    placeholder="ММ"
                                />
                                <span>/</span>
                                <input
                                    type="text"
                                    id="cardExpiresMonth"
                                    name="cardExpiresMonth"
                                    className="w-18 px-4 py-2 bg-background rounded-lg text-base placeholder:text-muted-foreground"
                                    placeholder="ГГ"
                                />
                            </div>
                        </div>
                    </div>
                </CardFrontFormWrapper>
                <CardBackFormWrapper>
                    <div className="flex flex-col justify-end gap-2 h-full max-w-46 sm:max-w-26 w-max text-xs">
                        <label htmlFor="cvc" className="text-[#555770]">
                            CVV/CVC
                        </label>
                        <div className="flex sm:flex-col items-center sm:items-start gap-2">
                            <input
                                type="text"
                                id="cvc"
                                name="cvc"
                                className="w-18 px-4 py-2 bg-background rounded-lg text-base placeholder:text-muted-foreground"
                                placeholder="000"
                            />
                            <p className="text-[10px] text-[#8F90A6]">
                                три цифры с обратной стороны карты
                            </p>
                        </div>
                    </div>
                </CardBackFormWrapper>
            </div>

            <label className="flex items-baseline gap-3">
                <input type="checkbox" name="saveCard"/>
                <p className="text-sm text-[#555770]">
                    Запомнить эту карту. Это безопасно. <span
                    className="inline-block align-bottom text-[#C7C9D9]"><InfoIcon/></span><br/>
                    Сохраняя карту, вы соглашаетесь с <a href="#" className="text-blue-500 whitespace-nowrap"> условиями
                    привязки карты.</a>
                </p>
            </label>
        </>
    );
}

const CardFrontFormWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div
            className="relative flex-shrink-0 w-full sm:w-81 h-52 p-5 rounded-xl overflow-clip z-10"
            style={{
                background: 'linear-gradient(135deg, #A6C8FF 0%, #0043CE 100%)',
                boxShadow: '0px 8px 16px 0px #55577029, 0px 2px 4px 0px #28293D0A',
            }}
        >
            <div className="absolute bg-[#004FC4] -z-10" style={{
                width: '285px',
                height: '226px',
                top: '112px',
                left: '-116.62px',
                borderRadius: '65%',
                opacity: 0.2,
            }}></div>
            <div className="absolute bg-[#004FC4] -z-10" style={{
                width: '285px',
                height: '226px',
                top: '-130px',
                left: '119.82px',
                borderRadius: '65%',
                opacity: 0.2,
            }}
            ></div>
            {children}
        </div>
    );
}

const CardBackFormWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div className="relative sm:my-1 pt-4 sm:pl-4 bg-secondary rounded-xl">
            <div className="absolute hidden sm:block sm:top-5 left-0 right-0 h-10 bg-[#C7C9D9]/30"></div>
            <div className="h-full p-5">
                {children}
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

const Card = ({card}: { card: BankCardEntity }) => {
    return (
        <CardWrapper>
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
