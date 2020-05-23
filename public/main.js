const context = {
    title: 'Добре дошли в Machinery Trader',
    body: 'Machinery Trader е твоят онлайн магазин! Тук ще намериш техника с широко приложение на ниски цени!',
    instruments: [{
            image: 'https://hqvcdn3.azureedge.net/qs_mh=460&mw=460&ver=20191215T000750&hcsh=8865F775F2DEC7ADE538F9A352F8313D/_$$_/media/aprimo/husqvarna/brushcutters/photos/studio/h210-05xxxx/h210-0507.png',
            name: 'HUSQVARNA 129R',
            description: 'С модел 129R, мощността, на която разчитат професионалистите, вече е достъпна и за частните стопани. Тази удобна за работа моторна коса се отличава с професионално качество и мощен 27 кубиков двигател, който се стартира лесно, благодаре на интуитивното управление и системата Smart Start®. Доставя се в комплект с комбиниран предпазител, тримерна глава и нож за трева. ',
            price: '579,00 лв.',
            sale: '559,00 лв.',
            dds: 'Продажна цена с вкл. ДДС'
        },
        {
            image: 'https://hqvcdn3.azureedge.net/qs_mh=460&mw=460&ver=20191218T172215&hcsh=37AF25A5E7765E865EC8BC2B7B8C2CD0/_$$_/media/aprimo/husqvarna/brushcutters/photos/studio/h210-07xxxx/h210-0718.png',
            name: 'HUSQVARNA 325R',
            description: 'Оборудван със солиден предавателен вал 325R е направена за потребителя с високи изисквания. Моторната коса се стартира лесно благодарение на SmartStart® и интуитивния контрол като Auto Return стоп бутон. 325R е разнообразен и оборудван с тримерна глава и нож за трева , позволяващ да се коси трева и храсти с една машина.',
            price: '750,00 лв.',
            sale: '599,00 лв.',
            dds: 'Продажна цена с вкл. ДДС'
        },
        {
            image: 'https://hqvcdn3.azureedge.net/qs_mh=460&mw=460&ver=20191213T032257&hcsh=A894B8E59CC07934F936CD9DE1F7404A/_$$_/media/aprimo/husqvarna/brushcutters/photos/studio/h210-03xxxx/h210-0310.png',
            name: 'HUSQVARNA 336FR',
            description: 'Идеалното решение за собственици на земя, които ще оценят предимството на две машини, обединени в една. Двигателят X-Torq® осигурява висока мощност и нисък разход на гориво. Системата за понижаване на силата на вибрациите LowVib подобрява удобството и контрола по време на работа. Доставя се със самар Balance 35, тримерна глава, нож за трева и циркулярен диск.',
            price: '1220,00 лв.',
            dds: 'Продажна цена с вкл. ДДС'
        },
        {
            image: 'https://hqvcdn3.azureedge.net/qs_mh=460&mw=460&ver=20200213T105534&hcsh=5202C45A5E6898650D646B4C397016B6/_$$_/media/aprimo/husqvarna/brushcutters/photos/studio/h210-04xxxx/h210-0402.png',
            name: 'HUSQVARNA 525RX',
            description: 'Мощна, същевременно лека моторна коса. Безкомпромисна към издънките и жилавата трева, деликатна спрямо оператора. ',
            price: '840.00 лв.',
            sale: '810.00 лв.',
            dds: 'Продажна цена с вкл. ДДС'
        },
        {
            image: 'https://hqvcdn3.azureedge.net/qs_mh=460&mw=460&ver=20200213T105531&hcsh=E638D187A1FF79C72504AAF5454BDBAF/_$$_/media/aprimo/husqvarna/brushcutters/photos/studio/h210-03xxxx/h210-0364.png',
            name: 'HUSQVARNA 535RX',
            description: 'Husqvarna 535RX е нова моторна коса в клас 35 куб. см., с отлична ергономия, предвидена за продължително и интензивно натоварване и с достатъчно мощност, за постигане на първокласни резултати.',
            price: '999.00 лв.',
            dds: 'Продажна цена с вкл. ДДС'
        },
        {
            image: 'https://hqvcdn3.azureedge.net/qs_mh=460&mw=460&ver=20200213T105534&hcsh=5202C45A5E6898650D646B4C397016B6/_$$_/media/aprimo/husqvarna/brushcutters/photos/studio/h210-04xxxx/h210-0402.png',
            name: 'HUSQVARNA 553RS',
            description: 'Високо продуктивна машина, подходяща за различни цели. Идеална за често косене на гъста трева и бурени. 553RS е подходяща за земеделци, които искат здрав, надежден и лесен за употреба храсторез. Снабден със здрав и икономичен двигател X-Torq и ефективен въздушен филтър, който предотвратява износването на двигателя и увеличава интервала време за обслужване на храстореза. Тримерна глава, нож за трева и предпазител комби-гард са включени.',
            price: '1075.00 лв.',
            sale: '899.00 лв.',
            dds: 'Продажна цена с вкл. ДДС'
        },
        {
            image: 'https://hqvcdn3.azureedge.net/qs_mh=460&mw=460&ver=20191215T000530&hcsh=9CBAD073D4DC135B3B01F9EB29804D29/_$$_/media/aprimo/husqvarna/brushcutters/photos/studio/h210-04xxxx/h210-0417.png',
            name: 'HUSQVARNA 545RX',
            description: 'Високопроизводителна професионална моторна коса с отлична ергономия, оптимизирана дължина на вала и ъглова предавка под 35 градуса. Оборудвана с двигател X-Torq®, осигуряващ висока мощност и ниска консумация на гориво. Доставя със самар Balance X. ',
            price: '1430.00 лв.',
            dds: 'Продажна цена с вкл. ДДС'
        }
    ]
}

const templateElement = document.getElementById("templateHB");

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("information").innerHTML = compiledHtml;
