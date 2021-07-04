import BackToTop from "react-back-to-top-button";

export default function ReturnToTop() {
    return (
        <BackToTop
            showOnScrollUp
            showAt={500}
            speed={1500}
        >
            <span className="text-white bg-gray-400 dark:bg-gray-700 px-5 py-2 rounded">↑</span>
        </BackToTop>
    )
}