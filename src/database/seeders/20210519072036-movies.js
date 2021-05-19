'use strict';

const TokenGenerator = require('uuid-token-generator');
const tokgen = new TokenGenerator();

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Movies', [
            {
                id: tokgen.generate(),
                name: 'Thanh Gươm Diệt Quỷ: Chuyến Tàu Vô Tận',
                unsignedName: 'thanh-guom-diet-quy-chuyen-tau-vo-tan',
                category: 'Hoạt hình',
                time: 117,
                country: 'Nhật Bản',
                director: 'Haruo Sotozaki',
                trailer: 'ATJYac_dORw',
                description:
                    'Kamado Tanjiro cùng quân đoàn Diệt quỷ đi cùng với Viêm trụ Rengoku Kyōjurō để điều tra những vụ mất tích đầy bí ẩn xay ra trên một chuyến tàu. Tuy nhiên, họ không biết rằng tại đây có một cái bẫy đang chờ đón họ. Liệu kết cục sẽ như thế nào?',
                price: 105,
                openingDay: new Date(2020, 12, 10),
                poster: 'CzkoTZYCji3YaAHvsJqXw2',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Doraemon: Nobita Và Những Bạn Khủng Long Mới',
                unsignedName: 'doraemon-nobita-va-nhung-ban-khung-long-moi',
                category: 'Hoạt hình',
                time: 110,
                country: 'Nhật Bản',
                director: 'Kazuaki Imai',
                trailer: '7ZbhWq2PybY',
                description:
                    'Nobita vô tình tìm thấy trứng khủng long hóa thạch, nhờ vào bảo bối của Doraemon giúp trứng nở ra hai chú khủng long con. Tuy nhiên, vì không thể nuôi khủng long trong thế giới hiện đại, nên cậu quyết định đưa chúng về quá khứ hơn 60 triệu năm trước ở Kỷ Phấn Trắng. Liệu hành trình lần này có gặp khó khăn gì hay không?',
                price: 105,
                openingDay: new Date(2020, 12, 18),
                poster: 'UpEVfGr4bkfcExvHpbqaAE',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Thanh Âm Trong Mắt Em',
                unsignedName: 'thanh-am-trong-mat-em',
                category: 'Tình cảm',
                time: 123,
                country: 'Nhật Bản',
                director: 'Miki Takahiro',
                trailer: 'ovRYr6AkHE0',
                description:
                    'Sau vụ tai nạn thương tâm, Akari mất đi cả gia đình lẫn đôi mắt. Thế nhưng, cô gái vẫn rất mạnh mẽ, tìm kiếm niềm vui từ những điều bình dị để sống tiếp. Tình cờ, cô quen biết Rui. Nụ cười trong sáng của Akari đã khiến chàng từng là võ sĩ quyền anh có quá khứ đen tối thay đổi. Thế nhưng, lúc họ nhận ra tình cảm dành cho nhau thì Rui cũng biết được tai nạn ngày xưa của Akari có liên quan đến anh...',
                price: 105,
                openingDay: new Date(2020, 11, 13),
                poster: 'VTn7oTRhLS2KTWcJAd3xJr',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Fukushima 50: Thảm Họa Kép',
                unsignedName: 'fukushima-50-tham-hoa-kep',
                category: 'Tâm lý',
                time: 121,
                country: 'Nhật Bản',
                director: 'Wakamatsu Setsuro',
                trailer: 'k1dZ8uVJq2o',
                description:
                    'Năm 2011, trận động đất kinh hoàng 9.0 độ richter xảy ra tại Fukushima, theo sau đó là cơn sóng thần với độ cao khủng khiếp. Hai thảm họa kép phá hủy nhà máy điện hạt nhân Daiichi. Trong tình thế ngàn cân treo sợi tóc ấy, 50 công nhân tại nhà máy Daiichi đã bất chấp nguy hiểm ở lại, tìm cách làm nguội các lò phản ứng nhằm ngăn chặn sự cố hạt nhân kinh khủng trong lịch sử nhân loại.',
                price: 105,
                openingDay: new Date(2020, 6, 12),
                poster: 'GBsaBywQjUdGmKh9VWgkLg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Pokémon The Movie: Sức Mạnh Của Chúng Tôi',
                unsignedName: 'pokemon-the-movie-suc-manh-cua-chung-toi',
                category: 'Hoạt hình',
                time: 99,
                country: 'Nhật Bản',
                director: 'Tetsuo Yajima',
                trailer: 'DIadDB5tfTs',
                description:
                    'Mỗi năm một lần, loạt phim hoạt hình Nhật Bản nổi tiếng toàn cầu Pokémon lại ra mắt phần mới. Phần phim năm nay tiếp tục tuyến truyện hấp dẫn về Pokémon Lugia trong truyền thuyết và cuộc gặp gỡ tình cờ của 5 huấn luyện viên Pokémon khi tham gia lễ hội Gió linh thiêng. Theo tục lệ, vào ngày kết thúc lễ hội, Pokémon Lugia sẽ ban phúc cho người dân. Thế nhưng, một sự cố đột ngột xảy ra khiến kế hoạch đổ bể. Những cơn gió biến mất và một cuộc tấn bông bí ẩn đe dọa hủy hoại thành phố. Satoshi và Pikachu phải đứng lên kêu gọi những người bạn mới ra sức bảo vệ thành phố.',
                price: 85,
                openingDay: new Date(2018, 11, 15),
                poster: '1UDCjdiKBCraLqHv19kS9o',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Bàn Tay Diệt Quỷ',
                unsignedName: 'ban-tay-diet-quy',
                category: 'Hành động',
                time: 128,
                country: 'Hàn Quốc',
                director: 'Kim Joo Hwan',
                trailer: 'l0AUy7MVJXk',
                description:
                    'Võ sĩ MMA Yong Hoo (Park Seo Joon) đi theo con đường trừ tà trục quỷ sau khi bỗng dưng sở hữu "Bàn tay diệt quỷ". Đối đầu với anh là Giám mục bóng tối - tên quỷ Satan đội lốt người. Dần dần, sự thật về cái chết của cha Yong Hoo và nguyên nhân anh trở thành "người được chọn" được hé lộ.',
                price: 105,
                openingDay: new Date(2021, 4, 9),
                poster: 'EzZF4a4n4KHpwfXDZwtUyv',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Lời Xưng Tội Số 8',
                unsignedName: 'loi-xung-toi-so-8',
                category: 'Kinh dị',
                time: 100,
                country: 'Hàn Quốc',
                director: 'Lee Chul Min',
                trailer: 'cP4HO9LqxqM',
                description:
                    'Nữ giáo viên mỹ thuật khi bị siết cổ ngay giữa sân trường trung học Eungbo. Viên cảnh sát Ki Chul Min (Lee Kyu Sung), vốn cũng là một cựu học sinh của trường, được giao điều tra vụ việc. Tại đây, anh gặp lại người bạn học cũ là Kang Min-goo (Joo Woo Jae) cũng đang giảng dạy tại đây.',
                price: 105,
                openingDay: new Date(2021, 2, 26),
                poster: '19apM5DBYW8p4JJYCY6CGr',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Nghề Siêu Khó',
                unsignedName: 'nghe-sieu-kho',
                category: 'Hài',
                time: 111,
                country: 'Hàn Quốc',
                director: 'Lee Byeong-Heon',
                trailer: 'l9Hu3Xocc-g',
                description:
                    'Đứng trước nguy cơ bị giải tán, nhóm điều tra do đội trưởng Ko lãnh đạo quyết định cải trang thành những nhân viên bán gà để theo dõi một băng đảng buôn bán ma túy tầm cỡ quốc tế. Không ngờ rằng, quán gà rán bỗng chốc nổi như cồn, khiến cho căn cứ địa của họ có nguy cơ bị bại lộ. Họ sẽ phải làm gì để vừa bảo vệ tính mạng mình, vừa hoàn thành nhiệm vụ?',
                price: 105,
                openingDay: new Date(2020, 12, 11),
                poster: 'F9CnpaFQGoXN8k1WaZLiNg',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Kỳ Nghỉ Nhớ Đời',
                unsignedName: 'ky-nghi-nho-doi',
                category: 'Hài',
                time: 106,
                country: 'Hàn Quốc',
                director: 'Kim Bong Han',
                trailer: 'Q_C9mWxFaY4',
                description:
                    'Nhân kỷ niệm 10 năm ngày cưới, cảnh sát Byung Soo cùng vợ và con gái quyết định làm một chuyến du lịch đến Philipines. Tuy nhiên, chưa kịp tận hưởng hạnh phúc, Byung Soo đã bị cuốn vào một phi vụ vô cùng hiểm nguy. Liệu anh có bảo toàn được tính mạng để quay trở về với gia đình của mình.',
                price: 105,
                openingDay: new Date(2020, 10, 30),
                poster: 'DUFFa52o4QtPATEiD4cYxD',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Cục Nợ Hóa Cục Cưng',
                unsignedName: 'cuc-no-hoa-cuc-cung',
                category: 'Hài',
                time: 113,
                country: 'Hàn Quốc',
                director: 'Kang Dae Kyu',
                trailer: 'SYsUS6mEn-0',
                description:
                    'Từ kẻ đòi nợ, hai người đàn ông bỗng trở thành "gà trống nuôi con" sau khi bắt cóc cô con gái của một phụ nữ nhập cư trái phép. Liệu những tình huống nào sẽ xảy đến với gia đình đặc biệt này?',
                price: 105,
                openingDay: new Date(2020, 10, 8),
                poster: 'C7HwbNUmf1DABEqUzGFQ2z',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Mèo Mập Đi Phượt',
                unsignedName: 'meo-map-di-phuot',
                category: 'Hoạt hình',
                time: 105,
                country: 'Trung Quốc',
                director: 'Gary Wang',
                trailer: 'Jsyq2XwzZ10',
                description:
                    'Vì tò mò về thế giới bên ngoài, chú mèo Cloak đã quyết định rời khỏi nhà. Muốn tìm được con trai, Blanket bắt buộc phải vượt qua nỗi sợ hãi và những ám ảnh trong quá khứ.',
                price: 85,
                openingDay: new Date(2018, 8, 31),
                poster: '4xZZcJncST9c59WguLHBYc',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Đại Sư Huynh',
                unsignedName: 'dai-su-huynh',
                category: 'Hành động',
                time: 101,
                country: 'Trung Quốc',
                director: 'Cam Gia Duy',
                trailer: 'Fc9wdMuEKOc',
                description:
                    'Lần đầu tiên, người hâm mộ được thấy Chân Tử Đan tham gia vào một bộ phim làm về đề tài giáo dục. Liệu màn trình diễn của anh còn hấp dẫn như Diệp Vấn năm nào?  Trong Big Brother, Chân Tử Đan vào vai một người thầy hiền lành, tận tâm với nghề và luôn xem đám học trò của mình như anh em ruột thịt. Cho đến một ngày, sự kiện cậu học sinh trong lớp mà anh làm chủ nhiệm bị một nhóm xã hội đen bắt cóc đã làm xáo trộn tất cả. Cũng chính từ đây, quá khứ đầy “máu lửa” của thầy giáo dần lộ diện… Cùng với Chân Tử Đan, Big Brother còn có sự tham gia của Lữ Lương Vỹ, Trần Kiều Ân và nhiều cao thủ MMA có tiếng. Hứa hẹn đem đến cho người xem những màn võ thuật vô cùng chất lượng, đẹp mắt và gay cấn.',
                price: 85,
                openingDay: new Date(2018, 8, 31),
                poster: 'RFxPELeDQmxe6tMCTrrKhN',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Na Tra - Ma Đồng Giáng Thế',
                unsignedName: 'na-tra-ma-dong-giang-the',
                category: 'Hoạt hình',
                time: 111,
                country: 'Trung Quốc',
                director: 'Yu Yang',
                trailer: 'xdOgym7MLAU',
                description:
                    'Tương truyền có một viên ngọc hội tụ tinh hoa đất trời đã được Nguyên Thủy Thiên Tôn tách làm hai. Một viên Linh Châu khai sinh ra vị anh hùng cứu thế và viên ngọc Ma Hoàn sẽ tạo ra tên Ma Vương gây hại cho nhân gian. Liệu Na Tra có thể tiêu diệt được tên ác ma để đem lại bình yên cho người dân?',
                price: 85,
                openingDay: new Date(2019, 9, 17),
                poster: 'DxadCGRDKuVQvttiRAkcUD',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Người Băng 2',
                unsignedName: 'nguoi-bang-2',
                category: 'Hành động',
                time: 87,
                country: 'Trung Quốc',
                director: 'La Vĩnh Xương',
                trailer: 'aPv3yt2fsSc',
                description:
                    'Bộ phim tiếp tục kể về chuyến phiêu lưu của Cẩm y vệ đời nhà Minh tên Hạ Anh sau khi anh thoát khỏi lớp băng và hồi sinh sau 4 thế kỷ ngủ đông. Sau khi tỉnh lại ở Hồng Kông, Người Băng bị truy lùng riết ráo bởi cảnh sát và giới truyền thông. Mặt khác, với mục tiêu quay trở lại quá khứ để bảo vệ người mình yêu thương, Người Băng tìm đến Bắc Kinh. Liệu anh có thực hiện kế hoạch thành công? Quan trọng hơn, chuyện gì sẽ xảy ra nếu lịch sử bị thay đổi?',
                price: 85,
                openingDay: new Date(2018, 12, 13),
                poster: 'KskoWzAwbQqhNusBpMsGr3',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Truy Lùng Quái Yêu 2',
                unsignedName: 'truy-lung-quai-yeu-2',
                category: 'Phiêu lưu',
                time: 111,
                country: 'Trung Quốc',
                director: 'Raman Hui',
                trailer: 'cE4vHoHrv-U',
                description:
                    'Sau phần một gây khuynh đảo phòng vé Trung Quốc mùa hè 2015, Truy Lùng Quái Yêu 2 sẽ sớm tái ngộ khán giả. Lần này, chàng trai Thiên Âm (Tỉnh Bách Nhiên) và cô nương Tiểu Lam (Bạch Bách Hà) sẽ có cuộc phiêu lưu mới – đi tìm người cha và khám phá thân thế bí ẩn của Thiên Âm. Cùng lúc đó, tiểu yêu củ cải Hồ Ba trở lại thôn Vĩnh Ninh và bị Ma Vương truy sát. Hậu duệ hoàng tộc yêu giới lại dính vào rắc rối.',
                price: 85,
                openingDay: new Date(2018, 2, 16),
                poster: '5Y7FuohV58V8XqxxdKHpby',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Ngũ Hiệp Trừ Yêu',
                unsignedName: 'ngu-hiep-tru-yeu',
                category: 'Giả tưởng',
                time: 110,
                country: 'Trung Quốc',
                director: 'Viên Hòa Bình',
                trailer: 'bHuFtZFTHIY',
                description:
                    'Bộ phim thuật lại hành trình của một nhóm kiếm khách săn lùng yêu ma quỷ quái. Trong thời đại hỗn độn khi mà ma quỷ đi lang thang khắp nơi, một nhóm kiếm khách bí ẩn đã xuất hiện để ngăn chặn cái ác và đảm bảo được sự bình yên cho thế giới. Mỗi thành viên của nhóm đều sở hữu một siêu năng lực đặc biệt và họ ẩn mình trong thế giới của loài người với những hình dạng khác nhau. Đối diện với những hiểm họa do bọn yêu ma gây nên, nhóm càng phải hiệp lực để bảo vệ vùng đất của loài người.',
                price: 70,
                openingDay: new Date(2017, 12, 22),
                poster: 'KXP9PcZ1h5FbLzZwzxS1Z6',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Diệp Vấn Ngoại Truyện: Trương Thiên Chí',
                unsignedName: 'diep-van-ngoai-truyen-truong-thien-chi',
                category: 'Hành động',
                time: 107,
                country: 'Hồng Kông',
                director: 'Viên Hòa Bình',
                trailer: 'lAikdgtF8MM',
                description:
                    'Sau trận thua tâm phục khẩu phục trước Diệp Vấn, Trương Thiên Chí quyết định quay trở về cuộc sống bình yên bên cạnh con trai của anh. Tuy nhiên đời luôn không như ý, một cuộc xung đột bất ngờ diễn ra khiến anh một lần nữa phải đối mặt với những cuộc chiến đầy cam go, quyết liệt.',
                price: 85,
                openingDay: new Date(2019, 1, 11),
                poster: 'TYwsbSuCKSoHXHkZ7b4zs8',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Bão Trắng 2: Trùm Á Phiện',
                unsignedName: 'bao-trang-2-trum-a-phien',
                category: 'Hành động',
                time: 99,
                country: 'Hồng Kông',
                director: 'Khâu Lễ Đào',
                trailer: 'TCb64YmbSx8',
                description:
                    'Với sự góp mặt của những cái tên đình đám như Lưu Đức Hoa, Cổ Thiên Lạc,... tác phẩm thuộc thể loại điều tra hành động The White Storm 2 - Drug Lords chắc chắn sẽ mang đến cho khác giả các màn đấu trí cũng như chiến đấu vô cùng cực tính, hấp dẫn.',
                price: 85,
                openingDay: new Date(2019, 8, 9),
                poster: '4QhpLPhTZ1iANpK7cMDJvw',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Thanh Xuân Ơi, Chào Em',
                unsignedName: 'thanh-xuan-oi-chao-em',
                category: 'Tình cảm',
                time: 105,
                country: 'Đài Loan',
                director: 'Chun-Yi Hsieh',
                trailer: 'FRU59ofthNE',
                description:
                    'Chàng trai trẻ Uông Chính Tường từng có một mối tình thanh xuân buồn thảm. Cô bạn thân kiêm người yêu đầu của anh có sự nghiệp thất bại và qua đời khi còn rất trẻ. Khi vô tình quay ngược thời gian trở về quá khứ, Uông Chính Tường sẽ làm thế nào để cứu cô? Liệu ngăn cản Lý Ân Bội theo đuổi ước mơ làm ca sĩ khi còn ngồi ở ghế nhà trường có phải là cách giúp cô sống sót? Mối tình của Uông Chính Tường sẽ kết thúc ra sao?',
                price: 85,
                openingDay: new Date(2018, 6, 29),
                poster: '8GHAuNPi473dCqEnbAcouR',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Gia Đình Croods: Kỷ Nguyên Mới',
                unsignedName: 'gia-dinh-croods-ky-nguyen-moi',
                category: 'Hoạt hình',
                time: 96,
                country: 'Mỹ',
                director: 'Joel Crawford',
                trailer: 'eLd55DPT9lE',
                description:
                    'Chuyến phiêu lưu lần này của gia đình Croods phải đối mặt với sự thách thức đến từ gia đình Bettermans - những kẻ tự cho rằng bản thân là những cá thể được tiến hóa vượt trội hơn. Liệu kết quả của cuộc đối đầu này sẽ ra sao?',
                price: 105,
                openingDay: new Date(2020, 11, 25),
                poster: 'J9BH6SeGmjTazYGcbHU5n5',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Thợ Săn Quái Vật',
                unsignedName: 'tho-san-quai-vat',
                category: 'Hành động',
                time: 104,
                country: 'Mỹ',
                director: 'Paul W.S. Anderson',
                trailer: '3od-kQMTZ9M',
                description:
                    'Trung úy Artemis và những binh sĩ trung thành bị chuyển tới vùng đất mới và phải đối đầu với những kẻ thù nguy hiểm với sức mạnh khủng khiếp. Bộ phim chuyển thể dựa trên trò chơi Capcom.',
                price: 105,
                openingDay: new Date(2020, 12, 30),
                poster: 'TqBV2HAAZSs2dUD8TiEXUi',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Phù Thủy Học Đường',
                unsignedName: 'phu-thuy-hoc-duong',
                category: 'Kinh dị',
                time: 94,
                country: 'Mỹ',
                director: 'Zoe Lister-Jones',
                trailer: 'J60ueFp-jv8',
                description:
                    'Một nhóm bạn gồm 4 người đã thực hiện nghi lễ đặc biệt để trở thành phù thủy và tiếp nhận quyền sở hữu phép thuật. Có trong tay năng lực đặc biệt, cả hội bạn dần nhận thấy có nhiều điều bí ẩn xảy ra. Dường đang có thế lực hắc ám nào đó xuất hiện và đe dọa họ.',
                price: 105,
                openingDay: new Date(2020, 10, 30),
                poster: '91Rsmpm5wV8wF6NquX4kpP',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Kẻ Rình Mồi',
                unsignedName: 'ke-rinh-moi',
                category: 'Kinh dị',
                time: 97,
                country: 'Mỹ',
                director: 'John Hyams',
                trailer: 'RQNL2x4wK1s',
                description:
                    'Một góa phụ bị bắt cóc và truy sát bởi một kẻ giết người máu lạnh. Cô phải chạy trốn vào rừng và cố gắng thoát khỏi tên sát nhân tàn ác kia.',
                price: 105,
                openingDay: new Date(2020, 11, 27),
                poster: 'Jg6TEqtiMuWunLvmjHR2K6',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Đừng Gọi Anh Là Bố',
                unsignedName: 'dung-goi-anh-la-bo',
                category: 'Hài',
                time: 104,
                country: 'Thái Lan',
                director: 'Mai Pawat',
                trailer: 'G2L_00UHLg',
                description:
                    'Chàng trai Got mồ côi mẹ, bố anh gà trống nuôi con. Vì một tai nạn bất ngờ, Got bị đưa về quá khứ. Got gặp bố anh - Prem ở độ tuổi thanh niên và đang làm đầu lĩnh một nhóm trai trẻ vô công rỗi nghề. Got quyết định gia nhập vào nhóm để tìm hiểu thêm về bố và gặp lại người mẹ đã qua đời. Liệu anh có thay đổi được quá khứ và cứu sống mẹ mình?',
                price: 105,
                openingDay: new Date(2020, 11, 11),
                poster: '9CkpAqBLh3D9jTv5Apo6cx',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Ngạ Quỷ: Tiếng Thét Đồi Gió Hú',
                unsignedName: 'nga-quy-tieng-thet-doi-gio-hu',
                category: 'Kinh dị',
                time: 112,
                country: 'Thái Lan',
                director: 'Chalerm Wongphim',
                trailer: 'E2XzOMEvE1Q',
                description:
                    'Sau khi một vụ án xảy ra, Trung Úy Satjathorn buộc phải đi đến ngôi làng kỳ bí TungMhaHon để điều tra phá án. Tại đây, mọi chuyện đều diễn ra bình thường vào ban ngày nhưng khi đêm đến, một bầu không khí rùng rợn lại bao trùm lên tất cả. Liệu rằng anh chàng cảnh sát Satjathorn có tìm ra được sự thật, giải thoát bản thân và ngôi làng khỏi những rắc rối này?',
                price: 105,
                openingDay: new Date(2020, 10, 29),
                poster: '6uJo8p7Eu6Zb8imMLv3AyE',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Bố Già',
                unsignedName: 'bo-gia',
                category: 'Hài',
                time: 128,
                country: 'Việt Nam',
                director: 'Vũ Ngọc Đãng',
                trailer: 'jluSu8Rw6YE',
                description:
                    'Trong phim, Trấn Thành vào vai ông Tư – một tài xế xe ôm quần quật làm việc qua ngày để chăm lo cho gia đình của mình. Mặc dù khá bảo thủ, nóng nảy, thường xuyên quát tháo nhưng thực chất ông Tư lại là một người rất giàu lòng yêu thương – không chỉ với người thân mà còn có hàng xóm, bạn bè xung quanh và thậm chí là cả những người xa lạ.',
                price: 105,
                openingDay: new Date(2021, 3, 5),
                poster: '7frPUEDZ5EKwzNntFVC1YG',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Hoa Phong Nguyệt Vũ',
                unsignedName: 'hoa-phong-nguyet-vu',
                category: 'Hành động',
                time: 95,
                country: 'Việt Nam',
                director: 'Phạm Thanh Hải',
                trailer: 'utAtqogbFjs',
                description:
                    'Một chuyên gia tâm lý đang đi tìm manh mối về cái chết của nữ khách hàng. Đồng thời, anh ta cũng phải đối mặt với những thế lực kì bí đang che giấu một bí mật liên quan đến chính gia đình mình.',
                price: 105,
                openingDay: new Date(2020, 12, 4),
                poster: 'TCFkjqtV8p2UcQVPfeACzG',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Cậu Vàng',
                unsignedName: 'cau-vang',
                category: 'Tâm lý',
                time: 96,
                country: 'Việt Nam',
                director: 'Trần Vũ Thủy',
                trailer: 'M4Zn8gumnr8',
                description:
                    'Cậu Vàng vốn là kỷ vật duy nhất của thằng Cò - con trai Lão Hạc để lại. Trải qua năm tháng, Lão Hạc xem Cậu Vàng như cháu của mình, cả hai "ông-cháu" sống nương tựa với nhau. Nhưng ở trong cái xã hội thực dân phong kiến thời bấy giờ, việc tồn tại tên Bá Kiến được xem như là sự hiện diện của cái ác ôn, những bất công áp bức đè lên vai người nghèo.Tưởng như Lão Hạc và Cậu Vàng sẽ có được cuộc sống bình yên, ngờ đâu kiếp người vốn đã ở đáy xã hội lại không thể thoát khỏi sự đàn áp từ những kẻ xấu xa kia. Rồi đây số phận của hai "ông-cháu" sẽ như thế nào?',
                price: 0,
                openingDay: new Date(2021, 1, 8),
                poster: 'D8uWDf15YNpzH5cdw7jv8B',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Trái Tim Quái Vật',
                unsignedName: 'trai-tim-quai-vat',
                category: 'Tâm lý',
                time: 89,
                country: 'Việt Nam',
                director: 'Tạ Nguyên Hiệp',
                trailer: 'qgVg0xh_ogQ',
                description:
                    'Khánh là một người mẹ đơn thân. Mong muốn sống và làm ăn lương thiện của cô bị thử thách khi chẳng may vướng vào vòng xoáy tội ác. Trở thành nghi phạm giết người tại khu chung cư đang sinh sống, Khánh rơi vào bước đường cùng phải ôm con bỏ trốn. Mọi thứ càng phức tạp hơn khi hàng loạt vụ án mạng khác cũng xảy ra. Rốt cuộc ai mới là kẻ thủ ác mang "Trái Tim Quái Vật" đứng sau màn? Phim có sự tham gia của Hoàng Thùy Linh, B Trần, Hứa Vỹ Văn, Trịnh Thăng Bình.',
                price: 105,
                openingDay: new Date(2020, 11, 20),
                poster: 'XmqGvpTqRqZTchS4xf7tiv',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: tokgen.generate(),
                name: 'Ròm',
                unsignedName: 'rom',
                category: 'Phiêu lưu',
                time: 79,
                country: 'Việt Nam',
                director: 'Trần Thanh Huy',
                trailer: 'XRm1P7oGpMQ',
                description:
                    'Những trò đỏ đen vốn từ lâu luôn bị lên án là thứ tệ nạn xã hội. Điện ảnh mượn đề tài về cờ bạc, cá cược để cho ra đời những bộ phim châm biếm trào phúng, mỉa mai. Rồi sau tất cả, thông điệp truyền tải vẫn hướng người xem có cái nhìn đúng đắn hơn về tác hại của thói cờ bạc. Ròm đưa người xem đến những khu xóm lao động, nơi cuộc sống của con người còn nhiều khó khăn. Áp lực kiếm tiền để sinh tồn và khát khao đổi đời đã khiến họ sa vào trò may rủi mang tên “ma đề”. Lần đầu tiên có một bộ phim khắc họa chân thực, rõ nét về góc tối và phản ánh hiện trạng xã hội. Tại thành phố vốn được xem là hoa lệ tuyệt đẹp ấy, vẫn còn đó nhiều mảnh đời phải chật vật từng ngày với đồng tiền. Ẩn sau sự hào nhoáng với ánh đèn rực rỡ chính là các con hẻm “ổ chuột” với đầy rẫy tệ nạn, mà hễ nhắc đến ai cũng khiếp sợ.',
                price: 105,
                openingDay: new Date(2020, 9, 25),
                poster: 'AWH8fw96hmZ1Bm3qV6ttrx',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Movies', null, {});
    },
};