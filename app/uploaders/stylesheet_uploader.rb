class StylesheetUploader < CarrierWave::Uploader::Base
  delegate :store_dir, to: :model

  def extension_white_list
    %w(css)
  end

  def filename
    if original_filename
      "#{Digest::MD5.hexdigest(read)}.#{file.extension}"
    end
  end
end
