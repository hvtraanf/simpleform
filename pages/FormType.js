import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button } from '@mantine/core'; // Or you can use a plain button
import Header from './Header'; // Adjust the path according to your file structure

export default function CombinedFormWithReactDatePicker() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    examType: '',
    healthCheck: '',
    hasDrivingLicense: '',
    examConfirmation: '',
    dateOfBirth: null, // Initialize dateOfBirth as null
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle date change
  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateOfBirth: date, // Set selected date
    }));
  };

  // Function to clear the form
  const clearForm = () => {
    setFormData({
      name: '',
      phoneNumber: '',
      examType: '',
      healthCheck: '',
      hasDrivingLicense: '',
      examConfirmation: '',
      dateOfBirth: null, // Reset dateOfBirth to null
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Render the Header component */}
      <Header />

      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6 mt-4"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name Field */}
        <div>
          <label className="block text-lg font-medium text-black">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nhập họ và tên"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg text-black"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block text-lg font-medium text-black">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Nhập số điện thoại"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}" // Ensure only 10 digits are allowed
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg text-black"
          />
        </div>

        {/* Date of Birth (Ngày sinh) with Month and Year Dropdown */}
        <div>
          <label className="block text-lg font-medium text-black">
            Ngày sinh <span className="text-red-500">*</span>
          </label>
          <DatePicker
            selected={formData.dateOfBirth}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            placeholderText="MM/DD/YYYY"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg text-black"
            showYearDropdown
            showMonthDropdown
            customHeader={({ date, changeYear, changeMonth, monthDate, years, months }) => (
              <div className="flex justify-between space-x-2">
                <select
                  value={months[date.getMonth()]}
                  onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                  className="text-black font-medium"
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={date.getFullYear()}
                  onChange={({ target: { value } }) => changeYear(value)}
                  className="text-black font-medium"
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            )}
          />
        </div>

        {/* Health Check Question */}
        <div>
          <label className="block text-lg font-medium text-black">
            Bạn đã khám sức khỏe chưa? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2 mt-2">
            <div className="flex items-center">
              <input
                id="da-kham"
                type="radio"
                name="healthCheck"
                value="Đã khám"
                checked={formData.healthCheck === 'Đã khám'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="da-kham" className="ml-3 block text-sm text-black">
                Đã khám
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="chua-kham"
                type="radio"
                name="healthCheck"
                value="Chưa khám"
                checked={formData.healthCheck === 'Chưa khám'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="chua-kham" className="ml-3 block text-sm text-black">
                Chưa khám
              </label>
            </div>
          </div>
        </div>

        {/* Driving License Question */}
        <div>
          <label className="block text-lg font-medium text-black">
            Bạn có bằng ô tô không? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2 mt-2">
            <div className="flex items-center">
              <input
                id="co-bang"
                type="radio"
                name="hasDrivingLicense"
                value="Có"
                checked={formData.hasDrivingLicense === 'Có'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="co-bang" className="ml-3 block text-sm text-black">
                Có
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="khong-bang"
                type="radio"
                name="hasDrivingLicense"
                value="Không"
                checked={formData.hasDrivingLicense === 'Không'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="khong-bang" className="ml-3 block text-sm text-black">
                Không
              </label>
            </div>
          </div>
        </div>

        {/* Exam Confirmation Question */}
        <div>
          <label className="block text-lg font-medium text-black">
            Xác nhận đăng ký lịch thi 17/10 - KDT <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2 mt-2">
            <div className="flex items-center">
              <input
                id="xac-nhan"
                type="radio"
                name="examConfirmation"
                value="Xác nhận"
                checked={formData.examConfirmation === 'Xác nhận'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="xac-nhan" className="ml-3 block text-sm text-black">
                Xác nhận
              </label>
            </div>
          </div>
        </div>

        {/* Buttons: Submit on the left, Clear Form on the right */}
        <div className="flex justify-between">
          {/* Submit Button */}
          <Button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit
          </Button>

          {/* Clear Form Button */}
          <Button
            type="button"
            onClick={clearForm}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          >
            Clear Form
          </Button>
        </div>
      </form>
    </div>
  );
}
