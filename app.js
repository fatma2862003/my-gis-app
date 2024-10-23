$(document).ready(function() {
    // تعريف الأسئلة باللغة العربية
    const questionsArabic = {
        "ما هي نظم المعلومات الجغرافية؟": "نظم المعلومات الجغرافية (GIS) هي نظام مصمم لجمع وتحليل وتفسير البيانات الجغرافية.",
        "كيف يمكن استخدام GIS في التخطيط الحضري؟": "يمكن استخدام GIS لتحليل البيانات الحضرية وتحسين تخطيط المدن.",
        "ما هي التطبيقات الشائعة لنظم المعلومات الجغرافية؟": "تطبيقات مثل التخطيط الحضري، إدارة الموارد، والبيئة.",
        "كيف أبدأ في تعلم نظم المعلومات الجغرافية؟": "يمكنك البدء من خلال دورات على منصات مثل Coursera.",
        "ما الفرق بين GIS وRS (الاستشعار عن بعد)؟": "GIS يركز على تحليل البيانات الجغرافية، بينما RS يركز على جمع البيانات من الفضاء.",
        "ما هي أهم البرمجيات المستخدمة في GIS؟": "مثل ArcGIS وQGIS وGRASS GIS.",
        "كيف يمكن استخدام GIS في إدارة الكوارث؟": "يمكن استخدام GIS لتحديد المناطق المعرضة للخطر وتخطيط استجابة فعالة.",
        "ما هو مفهوم الطبقات في نظم المعلومات الجغرافية؟": "الطبقات تمثل أنواعًا مختلفة من البيانات (مثل الطرق والمباني) في الخريطة.",
        "كيف يمكن استخدام GIS في مجال الزراعة؟": "يمكن استخدام GIS لتحليل التربة وتخطيط المحاصيل.",
        "ما هي البيانات الجغرافية المفتوحة ولماذا هي مهمة؟": "البيانات الجغرافية المفتوحة تسمح للباحثين والمطورين بالوصول إلى معلومات مفيدة.",
        "ما هي المساقط في نظم المعلومات الجغرافية؟": "المساقط هي طرق لتحويل سطح الأرض المنحني إلى سطح مستوي.",
        "ما هي أهمية اختيار نوع المسقط المناسب في GIS؟": "اختيار المسقط المناسب يؤثر على دقة تمثيل الأبعاد والأشكال.",
        "ما الفرق بين المسقط الإسطواني والمسقط المخروطي؟": "المسقط الإسطواني يُستخدم لتمثيل المناطق الاستوائية بدقة.",
        "كيف يؤثر اختيار المسقط على دقة البيانات الجغرافية؟": "يمكن أن يؤدي اختيار مسقط غير مناسب إلى تشويه البيانات.",
        "ما هو المسقط الجغرافي ولماذا يُستخدم؟": "المسقط الجغرافي هو المسقط الذي يعتمد على النظام الجغرافي المتعارف عليه.",
        "ما هي بعض المساقط الشائعة المستخدمة في نظم المعلومات الجغرافية؟": "مثل مسقط 'Mercator' و'Lambert Conformal Conic'.",
        "كيف يتم تحديد نطاق المسقط (Projection extent)؟": "نطاق المسقط يُحدد بواسطة المنطقة الجغرافية.",
        "ما هو تأثير التشويه في المساقط؟": "التشويه يمكن أن يؤثر على الأشكال والمسافات.",
        "كيف يمكن تحويل البيانات من مسقط إلى آخر؟": "يمكن استخدام أدوات تحويل المساقط.",
        "ما هي تطبيقات المساقط في الحياة اليومية؟": "تُستخدم المساقط في الخرائط الرقمية وتطبيقات الملاحة."
    };

    // تعريف الأسئلة باللغة الإنجليزية
    const questionsEnglish = {
        "What is Geographic Information Systems (GIS)?": "Geographic Information Systems (GIS) is a system designed to collect, analyze, and interpret geographic data.",
        "How can GIS be used in urban planning?": "GIS can be used to analyze urban data and improve city planning.",
        "What are common applications of Geographic Information Systems?": "Applications like urban planning, resource management, and environment.",
        "How do I start learning Geographic Information Systems?": "You can start through courses on platforms like Coursera.",
        "What is the difference between GIS and RS (Remote Sensing)?": "GIS focuses on analyzing geographic data, while RS focuses on collecting data from space.",
        "What are the major software used in GIS?": "Like ArcGIS, QGIS, and GRASS GIS.",
        "How can GIS be used in disaster management?": "GIS can be used to identify at-risk areas and plan effective responses.",
        "What is the concept of layers in Geographic Information Systems?": "Layers represent different types of data (like roads and buildings) on the map.",
        "How can GIS be used in agriculture?": "GIS can be used to analyze soil and plan crops.",
        "What is open geographic data and why is it important?": "Open geographic data allows researchers and developers to access useful information.",
        "What are projections in Geographic Information Systems?": "Projections are methods for transforming the curved surface of the earth to a flat surface.",
        "What is the importance of selecting the appropriate projection type in GIS?": "Choosing the right projection affects the accuracy of representation.",
        "What is the difference between cylindrical and conical projections?": "Cylindrical projections are used for representing tropical regions accurately.",
        "How does the choice of projection affect the accuracy of geographic data?": "Choosing an inappropriate projection can distort the data.",
        "What is a geographic projection and why is it used?": "A geographic projection is one that relies on the recognized geographic system.",
        "What are some common projections used in Geographic Information Systems?": "Like 'Mercator' and 'Lambert Conformal Conic'.",
        "How is the projection extent determined?": "Projection extent is defined by the geographic area.",
        "What is the impact of distortion in projections?": "Distortion can affect shapes, distances, and directions.",
        "How can data be converted from one projection to another?": "Projection conversion tools available in GIS can be used.",
        "What are the applications of projections in everyday life?": "Projections are used in digital maps and navigation applications."
    };

    let currentLanguage = 'arabic'; // اللغة الحالية

    $('#submitButton').click(function() {
        const question = $('#questionInput').val();
        let answer;

        if (currentLanguage === 'arabic') {
            answer = questionsArabic[question];
        } else {
            answer = questionsEnglish[question];
        }

        if (answer) {
            $('#answers').append('<p>' + answer + '</p>');
        } else {
            $('#answers').append('<p>عذراً، الإجابة غير متاحة.</p>');
        }
        $('#questionInput').val('');
    });

    $('#languageToggle').click(function() {
        currentLanguage = currentLanguage === 'arabic' ? 'english' : 'arabic'; // تبديل اللغة
        alert('تم تغيير اللغة إلى: ' + (currentLanguage === 'arabic' ? 'العربية' : 'English'));
    });

    $('#reloadButton').click(function() {
        $('#answers').empty();
        $('#questionInput').val('');
    });

    // إنشاء الخريطة
    var map = L.map('map').setView([20, 0], 2); // إحداثيات الخريطة

    // إضافة طبقة من الخرائط
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
});
