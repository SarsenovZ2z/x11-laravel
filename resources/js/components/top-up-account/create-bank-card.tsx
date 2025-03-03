import {ReactNode} from "react";
import SaveBankCardCheckbox from "@/components/top-up-account/save-bank-card-checkbox";

export type BankCard = {
    bankCardNumber: string,
    bankCardExpireMonth: string,
    bankCardExpireYear: string,
    bankCardCvc: string,
    shouldSaveCard: boolean,
};

export default function CreateBankCard({value, onChange, errors}: {
    value: BankCard | null,
    onChange: (value: BankCard | null) => void
    errors: { [index: string]: string | undefined },
}) {

    const updateBankCardData = (key: string, value: any) => {
        onChange({...value, [key]: value});
    };

    return (
        <div className="flex flex-col gap-6">
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
                                className={`w-full px-4 py-2 mt-2 bg-background rounded-lg ${errors['bankCard.bankCardNumber'] && 'border border-red-500'} text-base text-muted-foreground placeholder:text-muted-foreground`}
                                placeholder="Номер карты"
                                // required
                                pattern="[0-9]{16}"
                                maxLength={16}
                                onChange={(e) => {
                                    updateBankCardData('bankCardNumber', e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="bankCardExpireMonth" className="uppercase">
                                Действует до
                            </label>
                            <div className="flex items-center gap-1 mt-2">
                                <input
                                    type="text"
                                    id="bankCardExpireMonth"
                                    name="bankCardExpireMonth"
                                    className={`w-18 px-4 py-2 bg-background rounded-lg ${errors['bankCard.bankCardExpireMonth'] && 'border border-red-500'} text-base text-muted-foreground placeholder:text-muted-foreground`}
                                    placeholder="ММ"
                                    // required
                                    pattern="[0-9]{2}"
                                    maxLength={2}
                                    onChange={(e) => {
                                        updateBankCardData('bankCardExpireMonth', e.target.value);
                                    }}
                                />
                                <span className="text-lg px-0.5">/</span>
                                <input
                                    type="text"
                                    id="bankCardExpireYear"
                                    name="bankCardExpireYear"
                                    className={`w-18 px-4 py-2 bg-background rounded-lg ${errors['bankCard.bankCardExpireYear'] && 'border border-red-500'} text-base text-muted-foreground placeholder:text-muted-foreground`}
                                    placeholder="ГГ"
                                    // required
                                    pattern="[0-9]{2}"
                                    maxLength={2}
                                    onChange={(e) => {
                                        updateBankCardData('bankCardExpireYear', e.target.value);
                                    }}
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
                                name="bankCardCvc"
                                className={`w-18 px-4 py-2 bg-background rounded-lg ${errors['bankCard.bankCardCvc'] && 'border border-red-500'} text-base text-muted-foreground placeholder:text-muted-foreground`}
                                placeholder="000"
                                // required
                                pattern="[0-9]{3}"
                                maxLength={3}
                                onChange={(e) => {
                                    updateBankCardData('bankCardCvc', e.target.value);
                                }}
                            />
                            <p className="text-[10px] text-[#8F90A6]">
                                три цифры с обратной стороны карты
                            </p>
                        </div>
                    </div>
                </CardBackFormWrapper>
            </div>

            <SaveBankCardCheckbox
                value={value?.shouldSaveCard || true}
                onChange={(value) => updateBankCardData('shouldSaveCard', value)}
            />
        </div>
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
