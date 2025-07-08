import React from 'react';

const QRModal = ({ attenderId, state, onClose }) => {
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(attenderId)}&size=200x200`;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl shadow-lg p-6 max-w-md w-full'>
        <h3 className='text-2xl font-bold text-gray-800 mb-4 text-center'>
          {state === 'new' ? 'Đăng ký thành công' : 'Cập nhật thành công'}
        </h3>
        <div className='flex justify-center mb-4'>
          <img
            src={qrApiUrl}
            alt={`QR Code for attender ${attenderId}`}
            className='w-40 h-40 border border-gray-300 rounded-lg shadow-md'
          />
        </div>
        <p className='text-gray-600 text-center mb-6'>
          {state === 'new'
            ? 'Hãy kiểm tra email (bao gồm hộp thư spam) để nhận thông tin chi tiết. Chụp lại mã QR này để sử dụng tại sự kiện.'
            : 'Thông tin của bạn đã được cập nhật thành công. Vui lòng sử dụng mã QR trong email cũ để tham gia sự kiện.'}
        </p>
        <div className='flex justify-center'>
          <button
            className='bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors'
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRModal;
