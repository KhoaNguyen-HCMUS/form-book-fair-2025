import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Check,
  BookOpen,
  Music,
  MessageCircle,
  Palette,
  Globe,
} from 'lucide-react';

import QRModal from '../../components/qrModal/qrModal';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    events: [],
  });

  const [showQRModal, setShowQRModal] = useState(false);
  const [attenderId, setAttenderId] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);

  const events = [
    {
      id: '1_KM',
      name: 'Lễ Khai Mạc Hội sách Mơ Hỏi Mở',
      time: '8:00-9:00 18/07/2025',
      description:
        'Với sứ mệnh truyền cảm hứng đọc và nuôi dưỡng tình yêu sách trong cộng đồng người trẻ Bến Tre, Hội sách Mơ Hỏi Mở chính thức ra mắt. Lễ Khai mạc không chỉ là khởi điểm cho một hành trình đầy ý nghĩa, mà còn là dịp đặc biệt để vinh danh những bài thi ấn tượng đã vượt trội trong cuộc thi "Quyển sách đầu tiên".',
      icon: BookOpen,
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      solidColor: 'bg-yellow-400',
    },
    {
      id: '2_LSVH',
      name: 'Talkshow Lịch Sử, Văn Hóa “Hành trình BIẾT – Câu chuyện khai mở tri thức: từ quá khứ đến hiện tại và tương lai” ',
      time: '08:00-10:00 19/07/2025',
      description: `Bạn đang tìm kiếm con đường học tập thật sự ý nghĩa? Có lẽ talkshow này sẽ phù hợp với bạn, giúp bạn được lắng nghe, đối thoại và tự gợi mở những ý tưởng mới. Chúng ta sẽ cùng nhau khám phá lát cắt của lịch sử và văn hóa, qua những mảnh chuyện thú vị và cuộc đời của các nhân vật vĩ đại trong quá khứ - những người đã định hình nên tầm vóc của mình nhờ văn hóa đọc và sự học hỏi không ngừng. Diễn giả của chương trình đang rất mong chờ được gặp và chia sẻ cùng bạn, người đang miệt mài trên hành trình học, hiểu và lớn lên từng ngày!`,
      icon: Globe,
      color: 'from-orange-400 to-red-400',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-300',
      solidColor: 'bg-orange-400',
      image: '/LSVH.png',
    },
    {
      id: '3_TV',
      name: 'Talkshow Tiếng Việt "Ta như chim trong tiếng Việt như rừng"',
      time: '8:00-10:00 20/07/2025',
      description:
        'Bạn có bao giờ tự hỏi tiếng Việt mà mình đang sử dụng hằng ngày có tự bao giờ, hay từ cơ sở nào mà chúng ta hay kháo với nhau rằng “tiếng Việt giàu và đẹp”. Bên cạnh đó, phương ngữ miền Nam từ đâu mà ra, “quá giang” có nghĩa là gì hay tương lai của tiếng Việt sẽ như thế nào. Tất cả những thắc mắc trên sẽ được diễn giả gợi mở trong Talkshow “Ta như chim trong tiếng Việt như rừng” vào 8g00 sáng ngày 20 tháng 7 tại Hội sách Mơ Hỏi Mở. Mong chờ bạn – người yêu tiếng Việt thiết tha.',
      icon: MessageCircle,
      color: 'from-red-400 to-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-300',
      solidColor: 'bg-red-400',
      image: '/TV.png',
    },
    {
      id: '4_NT',
      name: 'Talkshow Nghệ Thuật “Hành trình CẢM - Một cuốn sách, một cuộn phim”',
      time: '15:00-17:00 19/07/2025',
      description:
        'Bạn có bao giờ tự hỏi tiếng Việt mà mình đang sử dụng hằng ngày có tự bao giờ, hay từ cơ sở nào mà chúng ta hay kháo với nhau rằng “tiếng Việt giàu và đẹp”. Bên cạnh đó, phương ngữ miền Nam từ đâu mà ra, “quá giang” có nghĩa là gì hay tương lai của tiếng Việt sẽ như thế nào. Tất cả những câu hỏi này sẽ được diễn giả của chúng ta gợi mở trong talkshow đặc biệt mang tên “Ta như chim trong tiếng Việt như rừng”. Hãy cùng khám phá vẻ đẹp và chiều sâu của tiếng Việt nhé!',
      icon: Palette,

      color: 'from-green-400 to-blue-400',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-300',
      solidColor: 'bg-green-400',
      image: '/NT.png',
    },
    {
      id: '5_DN',
      name: 'Đêm Nhạc “Bước Ra Từ Trang Sách”',
      time: '18:00-20:00 19/07/2025',
      description:
        'Đêm nhạc “Bước Ra Từ Trang Sách” nhằm mang đến một trải nghiệm âm nhạc khơi gợi sự tò mò về văn học dân gian và văn học Việt Nam cho người tham dự để họ có thể bắt đầu hành trình khám phá văn hoá Việt Nam.',
      icon: Music,
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      solidColor: 'bg-blue-400',
      image: '/DN.png',
    },
    {
      id: '6_BM',
      name: 'Lễ Bế Mạc Hội sách Mơ Hỏi Mở',
      time: '10:00-11:00 20/07/2025',
      description: (
        <>
          Lễ bế mạc không chỉ đánh dấu sự khép lại của Hội sách mà còn mở ra một hành trình khám phá văn hóa đọc đầy hứa
          hẹn cho mỗi chúng ta. Ban tổ chức tin rằng, với những hoạt động đa dạng và thú vị trong suốt ba ngày hội sách,
          bạn sẽ nhận được thật nhiều "món quà" giá trị về tinh thần và tri thức.{' '}
          <span className='font-bold text-red-500'>
            Đặc biệt, nếu đã đăng ký và tham gia đầy đủ 3/5 chương trình trong chuỗi hoạt động văn hóa này, bạn còn có
            cơ hội nhận những món quà thực tế giá trị từ Ban tổ chức ngay sau buổi lễ bế mạc!
          </span>
        </>
      ),
      icon: Calendar,
      color: 'from-indigo-400 to-pink-400',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-300',
      solidColor: 'bg-indigo-400',
      noRegistration: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventSelection = (eventId) => {
    setFormData((prev) => {
      const isSelected = prev.events.includes(eventId);
      const updatedEvents = isSelected ? prev.events.filter((id) => id !== eventId) : [...prev.events, eventId];
      return { ...prev, events: updatedEvents };
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || formData.events.length === 0) {
      alert('Vui lòng điền đầy đủ thông tin và chọn ít nhất một sự kiện!');
      return;
    }

    const URL = `${import.meta.env.VITE_DOMAIN}/api/register`;

    const payload = {
      email: formData.email,
      attender_name: formData.name,
      programs: formData.events.map((eventId) => ({ program_id: eventId })),
    };

    try {
      setLoading(true);
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setAttenderId(result.attender_id);
        setState(result.state);
        setShowQRModal(true);
        setFormData({ name: '', email: '', events: [] });
      } else {
        alert('Đăng ký thất bại. Vui lòng thử lại!');
        console.error('API Error:', result);
      }
    } catch (error) {
      alert('Lỗi kết nối đến máy chủ. Vui lòng thử lại!');
      console.error('Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseQRModal = () => {
    setShowQRModal(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <img src='/logo.png' alt='Hội Sách Mơ Hỏi Mở' className='mx-auto w-24 h-24 mb-4' />
          <h1 className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2'>
            Hội Sách Mơ Hỏi Mở
          </h1>
          <p className='text-gray-600 text-lg'>Đăng ký tham gia các sự kiện văn hóa đặc sắc</p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Event Details Section */}
          <div className='bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
              <Calendar className='w-6 h-6 mr-2 text-orange-500' />
              Thông tin chi tiết sự kiện
            </h3>
            <div className='space-y-6'>
              {events.map((event) => {
                const IconComponent = event.icon;
                return (
                  <div key={event.id} className='group'>
                    <div
                      className={`p-4 rounded-xl border-2 ${event.borderColor} ${event.bgColor} transition-all duration-200 hover:shadow-md`}
                    >
                      <div className='flex items-start flex-1 mb-3'>
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center mr-3 flex-shrink-0 mt-1`}
                        >
                          <IconComponent className='w-5 h-5 text-white' />
                        </div>
                        <div className='flex-1'>
                          <div className='font-semibold text-gray-800 leading-tight'>{event.name}</div>
                          <div className='text-sm text-gray-500 flex items-center mt-1'>
                            <Clock className='w-3 h-3 mr-1' />
                            {event.time}
                          </div>
                        </div>
                      </div>
                      {event.image && (
                        <img
                          src={event.image}
                          alt={event.name}
                          className={`w-full h-auto object-contain rounded-lg mb-3 border-2 ${event.borderColor}`}
                        />
                      )}
                      <p className='text-sm text-gray-700 leading-relaxed text-justify'>{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Section */}
          <div className='bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl border border-white/20'>
            <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
              <User className='w-6 h-6 mr-2 text-orange-500' />
              Thông tin đăng ký
            </h2>

            <div className='space-y-6'>
              <div className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block text-gray-700 font-medium mb-2 flex items-center'>
                    <User className='w-4 h-4 mr-2 text-gray-500' />
                    Họ và tên
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:border-gray-300'
                    placeholder='Nhập họ và tên'
                  />
                </div>

                <div>
                  <label htmlFor='email' className='block text-gray-700 font-medium mb-2 flex items-center'>
                    <Mail className='w-4 h-4 mr-2 text-gray-500' />
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 hover:border-gray-300'
                    placeholder='Nhập email'
                  />
                </div>
              </div>

              <div>
                <label className='block text-gray-700 font-medium mb-4 flex items-center'>
                  <Calendar className='w-4 h-4 mr-2 text-gray-500' />
                  Chọn sự kiện tham gia
                </label>
                <div className='space-y-3'>
                  {events.map((event) => {
                    const IconComponent = event.icon;
                    const isSelected = formData.events.includes(event.id);

                    return (
                      <div
                        key={event.id}
                        className={`relative rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                          isSelected
                            ? `${event.borderColor} ${event.bgColor} shadow-lg`
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <label htmlFor={event.id} className='flex items-start cursor-pointer p-4'>
                          <div className='flex items-start flex-1'>
                            <div
                              className={`w-10 h-10 rounded-lg bg-gradient-to-r ${event.color} flex items-center justify-center mr-3 flex-shrink-0 mt-1`}
                            >
                              <IconComponent className='w-5 h-5 text-white' />
                            </div>
                            <div className='flex-1'>
                              <div className='font-semibold text-gray-800 leading-tight'>{event.name}</div>
                              <div className='text-sm text-gray-500 flex items-center mt-1'>
                                <Clock className='w-3 h-3 mr-1' />
                                {event.time}
                              </div>
                            </div>
                          </div>
                          {!event.noRegistration && (
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 mt-1 ${
                                isSelected ? 'bg-orange-400 border-orange-400' : 'border-gray-300 bg-white'
                              }`}
                            >
                              {isSelected && <Check className='w-4 h-4 text-white' />}
                            </div>
                          )}
                          {!event.noRegistration && (
                            <input
                              type='checkbox'
                              id={event.id}
                              checked={isSelected}
                              onChange={() => handleEventSelection(event.id)}
                              className='hidden'
                            />
                          )}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                onClick={!loading ? handleSubmit : null}
                className={`w-full bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform shadow-lg text-center cursor-pointer ${
                  loading
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:from-orange-500 hover:to-red-500 hover:scale-105 hover:shadow-xl'
                }`}
              >
                {loading ? 'Đang xử lý...' : 'Đăng ký tham gia'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showQRModal && <QRModal attenderId={attenderId} state={state} onClose={handleCloseQRModal} />}
    </div>
  );
};

export default Home;
