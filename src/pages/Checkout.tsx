import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Shield, Lock, CheckCircle } from 'lucide-react';
import { packages } from '../data/mockData';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get('package');
  const total = parseInt(searchParams.get('total') || '0');

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    saveCard: false
  });

  const [billingData, setBillingData] = useState({
    sameAsContact: true,
    name: '',
    email: '',
    phone: ''
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

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    alert('Payment processed successfully! (This is a demo)');
    // Redirect to confirmation page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link to={`/booking?package=${packageId}`} className="text-gray-600 hover:text-sky-600">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Secure Checkout</h1>
              <p className="text-gray-600">{pkg.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="flex space-x-4 mb-6">
                <img src={pkg.images[0]} alt={pkg.title} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm">{pkg.destination}</p>
                  <p className="text-gray-600 text-sm">{pkg.duration}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${pkg.price}</div>
                  <div className="text-gray-600 text-sm">per person</div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total - Math.round(total * 0.1)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees</span>
                  <span>${Math.round(total * 0.1)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>

            {/* Billing Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Information</h2>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="sameAsContact"
                    checked={billingData.sameAsContact}
                    onChange={(e) => setBillingData({...billingData, sameAsContact: e.target.checked})}
                    className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                  />
                  <label htmlFor="sameAsContact" className="text-gray-700">
                    Billing address is the same as contact information
                  </label>
                </div>

                {!billingData.sameAsContact && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={billingData.name}
                        onChange={(e) => setBillingData({...billingData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={billingData.email}
                        onChange={(e) => setBillingData({...billingData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={billingData.phone}
                        onChange={(e) => setBillingData({...billingData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Method */}
            <form onSubmit={handlePaymentSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-sky-500" />
                Payment Method
              </h2>

              <div className="space-y-6">
                {/* Card Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                    <input
                      type="text"
                      required
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      required
                      value={paymentData.expiryDate}
                      onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      required
                      value={paymentData.cvv}
                      onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      required
                      value={paymentData.cardholderName}
                      onChange={(e) => setPaymentData({...paymentData, cardholderName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Billing Address */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.street}
                        onChange={(e) => setPaymentData({
                          ...paymentData,
                          billingAddress: {...paymentData.billingAddress, street: e.target.value}
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.city}
                        onChange={(e) => setPaymentData({
                          ...paymentData,
                          billingAddress: {...paymentData.billingAddress, city: e.target.value}
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.state}
                        onChange={(e) => setPaymentData({
                          ...paymentData,
                          billingAddress: {...paymentData.billingAddress, state: e.target.value}
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="NY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.zipCode}
                        onChange={(e) => setPaymentData({
                          ...paymentData,
                          billingAddress: {...paymentData.billingAddress, zipCode: e.target.value}
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="10001"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                      <input
                        type="text"
                        required
                        value={paymentData.billingAddress.country}
                        onChange={(e) => setPaymentData({
                          ...paymentData,
                          billingAddress: {...paymentData.billingAddress, country: e.target.value}
                        })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="United States"
                      />
                    </div>
                  </div>
                </div>

                {/* Save Card Option */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="saveCard"
                    checked={paymentData.saveCard}
                    onChange={(e) => setPaymentData({...paymentData, saveCard: e.target.checked})}
                    className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                  />
                  <label htmlFor="saveCard" className="text-gray-700">
                    Save this card for future payments
                  </label>
                </div>

                {/* Security Notice */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-medium flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Secure Payment
                      </p>
                      <p className="text-green-700 text-sm">
                        Your payment information is encrypted and processed securely. We never store your card details.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <Lock className="w-5 h-5" />
                  <span>Complete Payment - ${total}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Summary</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Package</span>
                  <span className="font-semibold">${pkg.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-semibold">${Math.round(total * 0.1)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total Amount</span>
                  <span>${total}</span>
                </div>
              </div>

              {/* Security Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>You will receive a confirmation email within 5 minutes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Free cancellation up to 24 hours before departure</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>24/7 customer support available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;