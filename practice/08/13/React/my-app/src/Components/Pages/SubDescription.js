const SubDescription = ({plusClassName}) => {
    const firstClassName = "center margin des-color";
    const secondClassName = "center margin";
    const className3 = "des-container " + plusClassName;
    return (
        <div className={className3}>
            <p className={firstClassName}>Apple Intelligence를 위한 탄생.</p>
            <p className={secondClassName}>Apple Intelligence, 현재 한국어로 서비스 중</p>
        </div>
    );
}

export default SubDescription;