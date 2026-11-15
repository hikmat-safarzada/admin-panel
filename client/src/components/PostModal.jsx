
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaRegImage, FaRegTrashAlt } from 'react-icons/fa'
import { LuUpload } from 'react-icons/lu'
import { HiOutlineNewspaper, HiOutlineSpeakerphone } from 'react-icons/hi'
import TextEditor from '../components/RichTextEditor'
import Success from './Success'

function PostModal({
  modalTitle,
  initialData,
  onClose,
  onSubmit,
  operation
}) {
  const [language, setLanguage] = useState('EN')

  const translations = {
    AZ: {
      title: 'Başlıq',
      titlePlaceholder: 'Başlığı daxil edin',
      url: 'URL',
      urlPlaceholder: 'naa.edu.az/',
      category: 'Kateqoriya',
      news: 'Xəbər',
      announcement: 'Elan',
      coverImage: 'Əsas şəkil',
      uploadCover: 'Əsas şəkli yüklə',
      description: 'Məzmun',
      editorInfo: 'Mətninizi qalın, kursiv, başlıqlar, siyahılar və digər üslublarla formatlamaq üçün alətlər panelindən istifadə edin.',
      next: 'Növbəti',
      gallery: 'Qalereya şəkilləri',
      galleryInfo: 'JPG/PNG, bir neçə şəkil seçə bilərsiniz',
      upload: 'Şəkil yüklə',
      back: 'Geri',
      submit: 'Təsdiqlə'
    },
    EN: {
      title: 'Title',
      titlePlaceholder: 'Enter title',
      url: 'URL',
      urlPlaceholder: 'naa.edu.az/',
      category: 'Category',
      news: 'News',
      announcement: 'Announcement',
      coverImage: 'Cover Image',
      uploadCover: 'Upload Cover Image',
      description: 'Description',
      editorInfo: 'Use the toolbar to format your text with bold, italic, headers, lists, and more.',
      next: 'Next',
      gallery: 'Gallery Images',
      galleryInfo: 'JPG/PNG, multiple images allowed',
      upload: 'Upload an image',
      back: 'Back',
      submit: 'Submit'
    }
  }

  const t = translations[language]

  const [step, setStep] = useState(1)
  const [title, setTitle] = useState(initialData?.title || '')
  const [url, setUrl] = useState(initialData?.url || initialData?.slug || '')
  const [category, setCategory] = useState(initialData?.category || 'News')

  const [coverImage, setCoverImage] = useState(
    initialData?.coverImage
      ? {
        file: null,
        preview: initialData.coverImage,
        name:
          typeof initialData.coverImage === 'string'
            ? initialData.coverImage.split('/').pop()
            : 'Cover Image'
      }
      : null
  )

  const [description, setDescription] = useState(
    initialData?.description || ''
  )

  const [galleryImages, setGalleryImages] = useState(
    (initialData?.galleryImages || []).map(image => ({
      file: null,
      preview: image,
      name:
        typeof image === 'string'
          ? image.split('/').pop()
          : 'Gallery Image'
    }))
  )

  const [success, setSuccess] = useState(false)

  const handleSubmit = async () => {

      const now = new Date()

      const formData = {
        title,
        url,
        category,
        description,
        coverImage: coverImage?.preview || '/public/mock-1.jpg',
        galleryImages: galleryImages.map(image => image.preview),
        status: initialData?.status || 'Active',
        publish: initialData?.publish || 'Publish',
        author: initialData?.author || 'snovruzlu',
        date: initialData?.date || now.toLocaleDateString('en-GB'),
        time:
          initialData?.time ||
          now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })
      }

      const result = initialData
        ? await onSubmit(initialData.id ?? initialData._id, formData)
        : await onSubmit(formData)

      if (result !== false) {
        setSuccess(true)
      }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      {success ? (
        <Success
          operation={operation}
          category={category}
          onClose={onClose}
        />
      ) : (
        <div className="relative w-full max-w-[620px] max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6">

          <div className="flex justify-between mb-5">
            <div className="flex gap-2">
              {['AZ', 'EN'].map(lang => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${language === lang
                    ? ' text-black border-[#243C7B]'
                    : 'bg-white text-gray-500 border-gray-200'
                    }`}
                >
                  <img
                    src={lang === 'AZ' ? '/flags/AZ flag.svg' : '/flags/UK flag.svg'}
                    alt={lang}
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  {lang}
                </button>
              ))}
            </div>

            <button type="button" onClick={onClose}>
              <IoClose size={22} />
            </button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{modalTitle}</h2>
            <span className="text-lg text-[#243C7B] font-medium">
              {step}/2
            </span>
          </div>

          <div className="flex gap-1 mb-6">
            <div className="w-1/2 h-1.5 rounded-full bg-[#243C7B]" />
            <div
              className={`w-1/2 h-1.5 rounded-full ${step === 2 ? 'bg-[#243C7B]' : 'bg-[#DCE5F5]'
                }`}
            />
          </div>

          {step === 1 && (
            <div className="flex flex-col gap-4">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.title}
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder={t.titlePlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition-all focus:border-[#243C7B] focus:ring-2 focus:ring-[#243C7B]/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.url}
                </label>

                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden transition-all focus-within:border-[#243C7B] focus-within:ring-2 focus-within:ring-[#243C7B]/10">
                  <span className="bg-gray-50 border-r border-gray-200 px-3 py-3 text-sm text-gray-400">
                    https://
                  </span>

                  <input
                    type="text"
                    value={url}
                    onChange={e => setUrl(e.target.value)}
                    placeholder={t.urlPlaceholder}
                    className="w-full px-3 py-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none bg-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.category}
                </label>

                <div className="flex gap-3">
                  {[
                    {
                      name: 'News',
                      label: t.news,
                      icon: <HiOutlineNewspaper size={18} />
                    },
                    {
                      name: 'Announcement',
                      label: t.announcement,
                      icon: <HiOutlineSpeakerphone size={18} />
                    }
                  ].map(catItem => (
                    <label
                      key={catItem.name}
                      className={`flex items-center gap-2 border rounded-full px-5 py-2.5 cursor-pointer text-sm font-medium transition-colors ${category === catItem.name
                        ? 'bg-[#1447E6] text-white border-[#1447E6]'
                        : 'border-[#1447E6] text-[#1447E6] bg-white'
                        }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={catItem.name}
                        checked={category === catItem.name}
                        onChange={e => setCategory(e.target.value)}
                        className="hidden"
                      />

                      {catItem.icon}
                      {catItem.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.coverImage}
                </label>

                {!coverImage && (
                  <label className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-4 cursor-pointer text-sm text-gray-500 hover:border-[#243C7B] bg-white shadow-sm transition">
                    <FaRegImage size={18} className="text-gray-400" />
                    <span>{t.uploadCover}</span>

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => {
                        const file = e.target.files[0]

                        if (file) {
                          setCoverImage({
                            file,
                            preview: URL.createObjectURL(file),
                            name: file.name
                          })
                        }

                        e.target.value = ''
                      }}
                    />
                  </label>
                )}

                {coverImage && (
                  <div className="flex flex-col gap-2 mt-1">
                    <img
                      src={coverImage.preview}
                      alt="Cover preview"
                      className="w-36 h-24 object-cover rounded-xl border border-gray-200 shadow-sm"
                    />

                    <div className="flex items-center justify-between w-fit gap-3 border border-green-500 bg-white text-green-600 px-3 py-1.5 rounded-full text-xs shadow-sm">
                      <span className="max-w-[150px] truncate">
                        {coverImage.name || coverImage.file?.name || 'Cover Image'}
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          if (coverImage.file) {
                            URL.revokeObjectURL(coverImage.preview)
                          }
                          setCoverImage(null)
                        }}
                        className="text-green-600 hover:text-red-500 font-bold flex items-center justify-center"
                      >
                        <IoClose size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.description}
                </label>

                <p className="text-xs text-gray-400">
                  {t.editorInfo}
                </p>

                <TextEditor
                  value={description}
                  onChange={setDescription}
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full bg-[#243C7B] hover:bg-[#1a2d5e] text-white rounded-xl py-3 mt-2 text-sm font-medium transition"
              >
                {t.next}
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col min-h-[420px]">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.gallery}
                </label>

                <p className="text-xs text-gray-400">
                  {t.galleryInfo}
                </p>

                <label className="h-44 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer text-gray-400 hover:border-[#243C7B] bg-white transition">
                  <LuUpload size={32} className="text-gray-500" />
                  <span className="text-xs text-gray-500">
                    {t.upload}
                  </span>

                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    multiple
                    className="hidden"
                    onChange={e => {
                      const files = Array.from(e.target.files)

                      const newImages = files.map(file => ({
                        file,
                        preview: URL.createObjectURL(file),
                        name: file.name
                      }))

                      setGalleryImages(prev => [...prev, ...newImages])
                      e.target.value = ''
                    }}
                  />
                </label>

                {galleryImages.length > 0 && (
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className="relative group w-35 h-25 rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                      >
                        <img
                          src={image.preview}
                          alt=""
                          className="w-full h-full object-cover"
                        />

                        <button
                          type="button"
                          onClick={() => {
                            if (image.file) {
                              URL.revokeObjectURL(image.preview)
                            }

                            setGalleryImages(prev =>
                              prev.filter((_, i) => i !== index)
                            )
                          }}
                          className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-500 shadow hover:bg-red-50 transition"
                        >
                          <FaRegTrashAlt size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mt-auto pt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 text-sm text-gray-600 font-medium hover:text-black transition"
                >
                  {t.back}
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#243C7B] hover:bg-[#1a2d5e] text-white rounded-xl px-10 py-3 text-sm font-medium transition"
                >
                  {t.submit}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PostModal
