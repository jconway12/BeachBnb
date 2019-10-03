class User < ApplicationRecord 
  validates :session_token, :email, :password_digest, presence: true
  validates :session_token, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates_format_of :email, :with => /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  attr_reader :password 
  after_initialize :ensure_session_token

  #associations
  has_many :listings,
  foreign_key: :owner_id,
  class_name: :Listing

  #auth methods
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

end
