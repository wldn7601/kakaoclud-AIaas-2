import P from '../Atoms/P';
import FooterLinkGroup from '../Pages/FooterLinkGroup';
// 링크 그룹들에 들어갈 데이터들
import footerLinkGroupData from '../../Data/footerLinkGroupData';

const MainFooter = () => {
    

    return (
        // gemini
        <footer className = "footer">
            {/* 링크그룹 영역 */}
            <div className="footer-link-groups-container">
                {/* map() 함수를 통해 데이터를 반복적으로 읽어 들인다. */}
                {footerLinkGroupData.map((column, columnIndex) => (
                    // 이 컨테이너 안에 3번째 줄 제외하고 링크가 2개씩 들어간다
                    <div key={"groups" + columnIndex} className="footer-link-group-container">
                        {/* map() 함수를 통해 링크그룹 컴포넌트를 반복적으로 생성한다. */}
                        {column.map((group, groupIndex) => (
                            <FooterLinkGroup 
                                key={"group" + groupIndex} 
                                title={group.title} 
                                links={group.links} 
                            />
                        ))}
                    </div>
                ))}
            </div>

            {/* 잡다한 설명문 영역 */}
            <div className="footer-description-container">
                <p>
                    다양한 쇼핑 방법: <a href="">Apple Store를 방문</a>하거나 <a href="">리셀러</a>를 찾아보거나 
                    , <a href="">080-330-8877</a>
                    번으로 전화하세요.
                </p>
                <hr/>
                <div>
                    <p>Copyright © 2025 Apple Inc. 모든 권리 보유.</p>
                    <div className="footer-description-link-container">
                        <a href="">개인정보 처리방침</a>
                        <a href="">웹 사이트 이용 약관</a>
                        <a href="">판매 및 환불</a>
                        <a href="">법적 고지</a>
                        <a href="">사이트 앱</a>
                    </div>
                </div>
                <p>
                    애플코리아 유한회사 | 대표이사: Mark Lee(마크리) 
                    | 주소: 서울특별시 강남구 영동대로 517 
                    | 전화: 080-333-4000 
                    | <a href="">https://support.apple.com/ko-kr</a> 
                    | 사업자등록번호: 120-81-84429 |
                </p>
                <p>
                    통신판매업신고번호: 제2011-서울강남-00810호 | 호스팅 서비스 제공: Apple Inc. | 
                    <a href="">사업자정보</a>
                </p>
            </div>
        </footer>
    );
}

export default MainFooter;