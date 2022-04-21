import '../../styles/top.css'
const Top = () => {


    return (
        <>
            <div className="top-container">
                    {/* <img src={process.env.PUBLIC_URL + "/trending.png"} className='trending-title' /> */}
                <div className='topImages'>
                    <img src={process.env.PUBLIC_URL + "/assets/topImages/fornite1.png"} className='TopImage' />
                    <img src={process.env.PUBLIC_URL + "/assets/topImages/batman1.png"} className='TopImage' />
                    <img src={process.env.PUBLIC_URL + "/assets/topImages/spiderman1.png"} className='TopImage' />
                </div>
            </div>
        </>
    );
}

export default Top;
