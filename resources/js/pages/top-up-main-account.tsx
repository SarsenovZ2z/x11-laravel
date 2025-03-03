import AppLayout from "@/layouts/app-layout";
import {useForm} from "@inertiajs/react";
import {FormEventHandler} from "react";
import TopUpAmount from "@/components/top-up-account/top-up-amount";
import {BankCardEntity} from "@/lib/bank-card/entities/bank-card-entity";
import {Collection} from "@/lib/common/collection";
import SelectBankCard from "@/components/top-up-account/select-bank-card";
import CreateBankCard, {BankCard} from "@/components/top-up-account/create-bank-card";

type TopUpForm = {
    amount: number | null,
    bankCardId: number | null,
    bankCard: BankCard | null,
};

export default function TopUpMainAccount({cards}: { cards: Collection<BankCardEntity> }) {

    const {data, setData, post, reset, errors, processing} = useForm<TopUpForm>({
        amount: null,
        bankCardId: null,
        bankCard: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('top-up-account'), {
            onFinish: () => {
                //
            },
        });
    };

    return (
        <AppLayout>
            <form
                onSubmit={submit}
                className="flex flex-col gap-7.5 w-full sm:w-min px-4 sm:px-10 py-8.5 sm:my-10 mx-auto sm:border sm:rounded-xl"
                style={{
                    boxShadow: '0px 8px 16px 0px #55577029, 0px 2px 4px 0px #28293D0A',
                }}
            >
                <h1 className="text-2xl font-medium">Пополнить банковской картой</h1>

                <div className="flex flex-col gap-6">
                    <TopUpAmount
                        onChange={(val) => setData('amount', val)}
                        errors={errors}
                    />

                    <SelectBankCard
                        cards={cards.data}
                        value={cards.data.find((card => card.id == data.bankCardId)) || null}
                        onChange={(value) => setData('bankCardId', value?.id || null)}
                    />

                    <CreateBankCard
                        value={data.bankCard}
                        onChange={(value) => setData('bankCard', value)}
                        errors={errors}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full sm:w-min px-8 py-3.5 bg-accent rounded-full text-accent-foreground font-semibold"
                    disabled={processing}
                >
                    Оплатить
                </button>
            </form>
        </AppLayout>
    );
}
