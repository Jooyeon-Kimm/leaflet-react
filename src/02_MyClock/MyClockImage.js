import clock from './clock.png'

function MyClockImage() {

    return(
        <div className="flex justify-center">
            <img src={clock} alt='clock' width="50%" height="50%" />
        </div>
    );
}

export default MyClockImage;