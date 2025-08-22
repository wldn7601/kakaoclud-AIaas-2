// gemini

/**
 * LinkGroup 컴포넌트는 제목과 링크 목록을 받아서 렌더링합니다.
 * @param {string} title - 링크 그룹의 제목입니다.
 * @param {Array<Object>} links - { text: string, url: string } 형태의 링크 배열입니다.
 */

const FooterLinkGroup = ({title, links}) => {

    return (
        <div className="footer-link-group">
            {/* 링크 그룹의 제목 */}
            <h4>{title}</h4>

            {/* 링크 목록 */}
            <ul>
                {/* map() 함수를 통해 링크를 반복적으로 생성 */}
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterLinkGroup;