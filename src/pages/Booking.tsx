import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Shield, CheckCircle } from 'lucide-react';
import { packages } from '../data/mockData';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get('package');
  const [formData, setFormData] = useState({
    // Traveler Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',

    // Travel Details
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,

    // Additional Info
    specialRequests: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    }
  });

  const pkg = packages.find(p => p.id === packageId);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package not found</h1>
          <Link to="/search" className="text-sky-600 hover:text-sky-700">Back to search</Link>
        </div>
      </div>
    );
  }

  const totalPrice = pkg.price * (formData.adults + formData.children);
  const taxes = Math.round(totalPrice * 0.1);
  const finalTotal = totalPrice + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Booking data:', { ...formData, packageId, totalPrice: finalTotal });
    // Redirect to checkout
    window.location.href = `/checkout?package=${packageId}&total=${finalTotal}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link to={`/package/${packageId}`} className="text-gray-600 hover:text-sky-600">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Complete Your Booking</h1>
              <p className="text-gray-600">{pkg.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Traveler Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-3 text-sky-500" />
                  Traveler Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({...formData, dateOfBirth: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                    <input
                      type="text"
                      value={formData.nationality}
                      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Your nationality"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number (if applicable)</label>
                  <input
                    type="text"
                    value={formData.passportNumber}
                    onChange={(e) => setFormData({...formData, passportNumber: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Enter passport number"
                  />
                </div>
              </div>

              {/* Travel Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-emerald-500" />
                  Travel Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Adults *</label>
                    <select
                      required
                      value={formData.adults}
                      onChange={(e) => setFormData({...formData, adults: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Children</label>
                    <select
                      value={formData.children}
                      onChange={(e) => setFormData({...formData, children: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    >
                      {[0,1,2,3,4].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                    <input
                      type="text"
                      value={formData.emergencyContact.name}
                      onChange={(e) => setFormData({
                        ...formData,
                        emergencyContact: {...formData.emergencyContact, name: e.target.value}
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.emergencyContact.phone}
                      onChange={(e) => setFormData({
                        ...formData,
                        emergencyContact: {...formData.emergencyContact, phone: e.target.value}
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                    <input
                      type="text"
                      value={formData.emergencyContact.relationship}
                      onChange={(e) => setFormData({
                        ...formData,
                        emergencyContact: {...formData.emergencyContact, relationship: e.target.value}
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="e.g., Spouse, Parent"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Requests</h2>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  rows={4}
                  placeholder="Any special dietary requirements, accessibility needs, or other requests..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold text-lg"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Booking Summary</h3>

              {/* Package Info */}
              <div className="flex space-x-4 mb-6">
                <img src={pkg.images[0]} alt={pkg.title} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{pkg.title}</h4>
                  <p className="text-gray-600 text-sm">{pkg.destination}</p>
                  <p className="text-gray-600 text-sm">{pkg.duration}</p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Package ({formData.adults + formData.children} × ${pkg.price})</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees</span>
                  <span>${taxes}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total Amount</span>
                  <span>${finalTotal}</span>
                </div>
              </div>

              {/* Security Notice */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">Secure Booking</p>
                    <p className="text-green-700 text-sm">Your payment information is encrypted and secure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cancellation Policy</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Free cancellation up to 24 hours before departure</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>50% refund for cancellations 24-72 hours before</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>No refund for cancellations less than 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;