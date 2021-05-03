const Content = (props)=>{
    const {conten, children} = props
    return(
        <div className={conten}>
            {children}
        </div>
    )
}

export default Content;