
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaRegImage, FaRegTrashAlt } from 'react-icons/fa'
import { LuUpload } from 'react-icons/lu'
import { HiOutlineNewspaper, HiOutlineSpeakerphone } from 'react-icons/hi'
import TextEditor from './RichTextEditor'
import Success from './Success'

function PostModal({
  modalTitle,
  initialData,
  onClose,
  onSubmit,
  operation
}) {
  const [language, setLanguage] = useState('EN')
  const [step, setStep] = useState(1)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState({})

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
      editorInfo: 'Mətninizi formatlamaq üçün alətlər panelindən istifadə edin.',
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
      editorInfo: 'Use the toolbar to format your text.',
      next: 'Next',
      gallery: 'Gallery Images',
      galleryInfo: 'JPG/PNG, multiple images allowed',
      upload: 'Upload an image',
      back: 'Back',
      submit: 'Submit'
    }
  }

  const t = translations[language]

  const [title, setTitle] = useState(initialData?.title || '')
  const [url, setUrl] = useState(initialData?.url || initialData?.slug || '')
  const [category, setCategory] = useState(initialData?.category || 'News')
  const [description, setDescription] = useState(initialData?.description || '')

  const [coverImage, setCoverImage] = useState(
    initialData?.coverImage || null
  )

  const [galleryImages, setGalleryImages] = useState(
    initialData?.galleryImages || []
  )

  const validateForm = () => {
    const newErrors = {}

    if (!title.trim()) {
      newErrors.title = 'Title is required'
    }

    if (!url.trim()) {
      newErrors.url = 'URL is required'
    }

    if (!category) {
      newErrors.category = 'Select a category'
    }

    if (!coverImage) {
      newErrors.coverImage = 'Cover image is required'
    }

    const plainDescription = description
      .replace(/<[^>]*>/g, '')
      .trim()

    if (!plainDescription) {
      newErrors.description = 'Description is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    const now = new Date()

    const formData = {
      title,
      url,
      category,
      description,
      coverImage: coverImage || '/mock-1.jpg',
      galleryImages,
      status: initialData?.status || 'Active',
      publish: initialData?.publish || 'Publish',
      author: initialData?.author || 'snovruzlu',
      date: initialData?.date || now.toLocaleDateString('en-GB'),
      time: initialData?.time || now.toLocaleTimeString('en-US', {
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

  const handleNext = () => {
    if (validateForm()) {
      setStep(2)
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
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
                    language === lang
                      ? 'text-black border-[#243C7B]'
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
            <div className={`w-1/2 h-1.5 rounded-full ${
              step === 2 ? 'bg-[#243C7B]' : 'bg-[#DCE5F5]'
            }`} />
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
                  onChange={e => {
                    setTitle(e.target.value)
                    setErrors(prev => ({ ...prev, title: '' }))
                  }}
                  placeholder={t.titlePlaceholder}
                  className={`w-full border rounded-xl px-4 py-3 text-sm outline-none ${
                    errors.title ? 'border-red-500' : 'border-gray-200'
                  }`}
                />

                {errors.title && (
                  <p className="text-red-500 text-xs">{errors.title}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.url}
                </label>

                <div className={`flex items-center border rounded-xl overflow-hidden ${
                  errors.url ? 'border-red-500' : 'border-gray-200'
                }`}>
                  <span className="bg-gray-50 border-r border-gray-200 px-3 py-3 text-sm text-gray-400">
                    https://
                  </span>

                  <input
                    type="text"
                    value={url}
                    onChange={e => {
                      setUrl(e.target.value)
                      setErrors(prev => ({ ...prev, url: '' }))
                    }}
                    placeholder={t.urlPlaceholder}
                    className="w-full px-3 py-3 text-sm outline-none"
                  />
                </div>

                {errors.url && (
                  <p className="text-red-500 text-xs">{errors.url}</p>
                )}
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
                      className={`flex items-center gap-2 border rounded-full px-5 py-2.5 cursor-pointer text-sm font-medium ${
                        category === catItem.name
                          ? 'bg-[#1447E6] text-white border-[#1447E6]'
                          : 'border-[#1447E6] text-[#1447E6] bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={catItem.name}
                        checked={category === catItem.name}
                        onChange={e => {
                          setCategory(e.target.value)
                          setErrors(prev => ({ ...prev, category: '' }))
                        }}
                        className="hidden"
                      />
                      {catItem.icon}
                      {catItem.label}
                    </label>
                  ))}
                </div>

                {errors.category && (
                  <p className="text-red-500 text-xs">{errors.category}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.coverImage}
                </label>

                {!coverImage && (
                  <label className={`flex items-center justify-center gap-2 border rounded-xl py-4 cursor-pointer text-sm text-gray-500 ${
                    errors.coverImage ? 'border-red-500' : 'border-gray-200'
                  }`}>
                    <FaRegImage size={18} />
                    <span>{t.uploadCover}</span>

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={e => {
                        const file = e.target.files[0]

                        if (file) {
                          setCoverImage(URL.createObjectURL(file))
                          setErrors(prev => ({ ...prev, coverImage: '' }))
                        }

                        e.target.value = ''
                      }}
                    />
                  </label>
                )}

                {errors.coverImage && (
                  <p className="text-red-500 text-xs">{errors.coverImage}</p>
                )}

                {coverImage && (
                  <div className="flex flex-col gap-2 mt-1">
                    <img
                      src={coverImage}
                      alt="Cover preview"
                      className="w-36 h-24 object-cover rounded-xl border border-gray-200"
                    />

                    <button
                      type="button"
                      onClick={() => setCoverImage(null)}
                      className="flex items-center gap-2 text-red-500 text-xs w-fit"
                    >
                      <IoClose size={16} />
                      Remove image
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.description}
                </label>

                <p className="text-xs text-gray-400">{t.editorInfo}</p>

                <TextEditor
                  value={description}
                  onChange={value => {
                    setDescription(value)
                    setErrors(prev => ({ ...prev, description: '' }))
                  }}
                />

                {errors.description && (
                  <p className="text-red-500 text-xs">{errors.description}</p>
                )}
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-[#243C7B] hover:bg-[#1a2d5e] text-white rounded-xl py-3 mt-2 text-sm font-medium"
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

                <p className="text-xs text-gray-400">{t.galleryInfo}</p>

                <label className="h-44 border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer text-gray-400 hover:border-[#243C7B]">
                  <LuUpload size={32} />
                  <span className="text-xs">{t.upload}</span>

                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    multiple
                    className="hidden"
                    onChange={e => {
                      const files = Array.from(e.target.files)
                      const images = files.map(file => URL.createObjectURL(file))

                      setGalleryImages(prev => [...prev, ...images])
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
                          src={image}
                          alt=""
                          className="w-full h-full object-cover"
                        />

                        <button
                          type="button"
                          onClick={() => {
                            setGalleryImages(prev =>
                              prev.filter((_, i) => i !== index)
                            )
                          }}
                          className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-500 shadow"
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
                  className="px-6 py-3 text-sm text-gray-600 font-medium"
                >
                  {t.back}
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#243C7B] hover:bg-[#1a2d5e] text-white rounded-xl px-10 py-3 text-sm font-medium"
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
