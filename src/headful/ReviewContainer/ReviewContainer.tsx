import React from 'react';
import styles from './ReviewContainer.module.scss';
import ReviewImage1 from '@/assets/images/review1.webp';
import ReviewImage2 from '@/assets/images/review2.webp';
import ReviewImage3 from '@/assets/images/review3.webp';

const ReviewContainer = () => {
    return (
        <div id="review" className={styles.ReviewContainer}>
            <div className={styles.ReviewContent}>
                <div className={styles.TextWrapper}>
                    <div className={styles.Title}>파트너 물류와 함께 하세요</div>
                    <div className={styles.SubTitle}>함께한 기사님들의 생생한 후기입니다</div>
                </div>

                <div className={styles.CardWrapper}>
                    <div className={styles.Card} style={{ backgroundImage: `url(${ReviewImage1.src})` }}>
                        처음엔 걱정도 많았지만, 막상 시작해보니 생각보다 어렵지 않았습니다. 초보자도 쉽게 배울 수 있도록
                        체계적인 교육과 안내가 있어 금방 적응할 수 있었어요!
                    </div>
                    <div className={styles.Card} style={{ backgroundImage: `url(${ReviewImage2.src})` }}>
                        수입이 가장 걱정이었는데, 꾸준히 일할 수 있어서 수익이 안정적입니다. 노력한 만큼 벌수 있다는
                        점이 정말 만족스럽고, 가족을 책임질 수 있는 든든한 직업이 됐어요.
                    </div>
                    <div className={styles.Card} style={{ backgroundImage: `url(${ReviewImage3.src})` }}>
                        일이 끊기지 않는다는 게 가장 큰 장점인 것 같아요. 한 달, 두 달 하다 보니 이제는 내 사업처럼
                        애착이 생기네요. 안정적인 직업을 찾는다면 추천합니다!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewContainer;
