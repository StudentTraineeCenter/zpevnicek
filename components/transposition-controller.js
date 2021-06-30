import { Slider } from '@fluentui/react';

const SliderView = () => {
    const sliderValueFormat = (value) => `${value / 10} rem`;

    return (
        <Slider
            label="Velikost písma"
            max={35}
            min={10}
            ariaValueText={sliderValueFormat}
            valueFormat={sliderValueFormat}
            showValue
            defaultValue="11"
            onChange={(val) => {
                document.getElementById("songText").style.fontSize = `${val / 10}rem`;
                document.getElementById("songText").style.lineHeight = `${((val / 10 ) * 2)}rem`;
            }}
        />
    );
};

export default function TranspositionController() {
    return (
        <div className="w-full flex justify-evenly flex-wrap mb-5 max-w-2xl mx-auto">
            <div className="w-full sm:w-1/2 lg:1/4">
                <h2>Transpozice</h2>
            </div>
            <div className="w-full sm:w-1/2 lg:1/4">
                <SliderView />
            </div>
        </div>
    )
}