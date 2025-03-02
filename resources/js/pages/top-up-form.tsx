export default function TopUpForm() {
    return (
        <form className="flex flex-col gap-7.5 w-min px-4 sm:px-10 py-8.5 sm:my-10 mx-auto sm:border sm:rounded-xl">
            <h1 className="text-2xl font-medium">Пополнить банковской картой</h1>
            <div className="flex flex-col gap-6">

            </div>
            <div>
                <button
                    type="submit"
                    className="w-full md:w-fit px-8 py-3.5 bg-accent text-accent-foreground rounded-full"
                >
                    Оплатить
                </button>
            </div>
        </form>
    );
}
