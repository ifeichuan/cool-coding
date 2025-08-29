import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Comments from '../../../components/Comments';

export default function FooterWrapper(props) {
    return (
        <>
            <Footer {...props} />

            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #e0e0e0' }}>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                    💡 如果你在本站发现错误或笔误，欢迎点击 <strong>“编辑此页”</strong> 来修改。
                    你的反馈对我们非常重要，非常感谢！🙏
                </p>
            </div>

            <Comments />
        </>
    );
}
