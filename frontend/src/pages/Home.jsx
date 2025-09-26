import React from "react";
import BottomNav from "../components/shared/BottomNav";

const Home = () => {
    return (
        <section className="flex gap-3 bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
            {/* Left Div */}
            <div className="flex-[3] bg-[#1a1a1a]"></div>

            <div className="flex-[2]"></div>
            <BottomNav />
        </section>
    );
};

export default Home;