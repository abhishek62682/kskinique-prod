const Stats = () => {
    return (
        <div className="py-[50px] md:py-[65px] lg:py-[100px] px-6 md:px-15 bg-surface">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">

                <div className="flex items-center gap-3 justify-center flex-1">
                    <h4 className="font-primary text-[40px] md:text-[50px] font-normal leading-none text-primary-dark">3+</h4>
                    <p className="font-primary max-w-40 text-[13px] md:text-[14px] font-normal leading-5 text-text-soft">Years in dermatology & aesthetic medicine</p>
                </div>

                <div className="hidden sm:block w-px h-10 bg-border-dark shrink-0" />

                <div className="flex items-center gap-3 justify-center flex-1">
                    <h4 className="font-primary text-[40px] md:text-[50px] font-normal leading-none text-primary-dark">2K+</h4>
                    <p className="font-primary max-w-40 text-[13px] md:text-[14px] font-normal leading-5 text-text-soft">Thousands of happy patients treated yearly</p>
                </div>

                <div className="hidden sm:block w-px h-10 bg-border-dark shrink-0" />

                <div className="flex items-center gap-3 justify-center flex-1">
                    <h4 className="font-primary text-[40px] md:text-[50px] font-normal leading-none text-primary-dark">99%</h4>
                    <p className="font-primary max-w-40 text-[13px] md:text-[14px] font-normal leading-5 text-text-soft">Overall patient satisfaction rate</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;