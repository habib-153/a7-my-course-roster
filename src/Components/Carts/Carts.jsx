/* eslint-disable react/prop-types */


const Carts = ({courses, addCredit, remainingCredit, totalPrice}) => {
    return (
        <div className="">
            <div className="bg-[#efefef] p-2 rounded-xl">
                <h3 className="text-[#2F80ED] pb-2 border-b-2 font-bold text-lg">Course Hour Remaining {remainingCredit}hr</h3>
                <div>
                    <h3 className="font-bold text-lg my-2">Course Name</h3>
                    <ul className="pb-2 ml-5 list-decimal border-b-2 text-[rgba(28,27,27,0.6)]">
                        
                        {
                            courses.map(course=><li key={course.id}>{course.title}</li>)
                        }
                    
                    </ul>
                    <p className="py-2 text-[rgba(28,27,27,0.6)] font-semibold border-b-2">Total Credit Hour: {addCredit}</p>
                    <p className="py-2 text-[rgba(28,27,27,0.6)] font-semibold">Total Price: {totalPrice}</p>
                </div>
            </div>   

        </div>
    );
};

export default Carts;