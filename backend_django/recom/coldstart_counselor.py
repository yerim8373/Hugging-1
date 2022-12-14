import cProfile
import numpy as np

from django.db.models import Avg, F
from recom.models import Counselor, CounselorReview

# 상담사 콜드스타트

def recom_coldstart_counselor(member_category):
    counsel_category = ['Depressed', 'Insomnia', 'Family', 'School', 'Company', 'Relationship', 'Love', 'SelfUnderstanding']
    loss = list(set(counsel_category) - {'Insomnia', 'School'})
    bored = list(set(counsel_category) - {'Depressed', 'Insomnia', 'Family', 'Relationship', 'Love'})
    alone = list(set(counsel_category) - {'Company', 'SelfUnderstanding'})
    lethargy = list(set(counsel_category) - {'Family', 'Relationship', 'Love'})
    angry = list(set(counsel_category) - {'SelfUnderstanding'})
    annoy = list(set(counsel_category) - {'School', 'Company', 'Relationship', 'Love'})
    inconvenience = list(set(counsel_category) - {'Depressed', 'Love', 'SelfUnderstanding'})

    # 고민 카테고리, 상담사 카테고리 연결
    recom_category = {'Happy':counsel_category, 'Comfort':counsel_category, 'Flutter':counsel_category, 'Sadness':counsel_category, 'Melancholy':counsel_category,
    'Loss':loss, 'Boredom':bored, 'Loneliness':alone, 'Lethargy':lethargy, 'Anger':angry, 'Annoyed':annoy, 'Discomfort':inconvenience}
    # print(recom_category)

    # print(member_category)
    my_recom_category = []
    
    for i in range(member_category.count()):
        for key, val in recom_category.items():
            if member_category[i].get('category') == key:
                my_recom_category.extend(val)
    list(set(my_recom_category))
    # print(my_recom_category)

    # 사용자 추천 카테고리에 해당하는 상담사 데이터 불러오기
    counselor = Counselor.objects.filter(subject__in=my_recom_category).annotate(Avg('counselorreview__score'))\
        .annotate(average=F('counselorreview__score__avg'), profileImage=F('profile_image'), counselorId=F('id'), availableTime=F('available_time'))\
                    .values('counselorId', 'availableTime', 'career', 'certificate', 'email', 'explanation', 'gender', 'name', 'password', 'subject', 'profileImage', 'average')\
        .order_by('-counselorreview__score__avg')[:3]
    print(counselor.values())

    # 각 상담사 평점
    # reviewAvg = CounselorReview.objects.values()\
        
    # print(reviewAvg.values())

    # rrrr = Counselor.objects.filter(id__in=reviewAvg.values_list('counselor_id'))
    # print(rrrr)

    return counselor