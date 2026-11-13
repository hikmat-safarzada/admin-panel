
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaRegImage } from 'react-icons/fa'
import { LuUpload } from 'react-icons/lu'
import TextEditor from '../TextEditor'

function CreatePost({ onClose, onSubmit }) {
  const [step, setStep] = useState(1)

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [category, setCategory] = useState('News')
  const [coverImage, setCoverImage] = useState(null)
  const [description, setDescription] = useState('')
  const [galleryImages, setGalleryImages] = useState([])
  const [success, setSuccess] = useState(false)

  const handleSubmit = () => {
    onSubmit?.({
      title,
      slug,
      category,
      coverImage,
      description,
      galleryImages: galleryImages.map((image) => image.file),
      status: 'Active'
    })

    setSuccess(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      {success ? (

        // SUCCESS
        <div className="w-full max-w-[500px] h-[300px] bg-white rounded-xl flex flex-col items-center justify-center gap-4 shadow-xl">

          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 text-5xl">✓</span>
          </div>

          <h2 className="text-2xl font-semibold text-green-600">
            Success!
          </h2>

          <p className="text-gray-500 text-sm">
            Your post has been created successfully.
          </p>

          <button
            onClick={onClose}
            className="bg-green-600 text-white px-8 py-2 rounded-lg mt-2"
          >
            Done
          </button>

        </div>

      ) : (

        // CREATE MODAL
        <div className="relative w-full max-w-[620px] rounded-xl bg-white p-6">

          {/* Top */}
          <div className="flex justify-between mb-5">
            <div className="flex gap-2">
              <button className="rounded-full border px-3 py-1 text-xs">
                🇦🇿 AZ
              </button>
              <button className="rounded-full border px-3 py-1 text-xs">
                🇬🇧 EN
              </button>
            </div>

            <button onClick={onClose}>
              <IoClose size={22} />
            </button>
          </div>

          {/* Heading */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Create News / Announcement
            </h2>

            <span className="text-lg text-[#243C7B]">
              {step}/2
            </span>
          </div>

          {/* Progress */}
          <div className="flex gap-1 mb-6">
            <div className="w-1/2 h-1.5 rounded-full bg-[#243C7B]" />

            <div className={`w-1/2 h-1.5 rounded-full ${
              step === 2 ? 'bg-[#243C7B]' : 'bg-[#DCE5F5]'
            }`} />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="flex flex-col gap-4">

              <div className="flex flex-col gap-2">
                <label className="text-sm">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title"
                  className="border rounded-lg px-3 py-3 text-sm outline-none focus:border-[#243C7B]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm">Slug</label>
                <input
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="naa.edu.az/"
                  className="border rounded-lg px-3 py-3 text-sm outline-none focus:border-[#243C7B]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm">Category</label>

                <div className="flex gap-2">
                  {['News', 'Announcement'].map((item) => (
                    <label
                      key={item}
                      className={`flex items-center gap-2 border rounded-full px-4 py-2 cursor-pointer text-sm ${
                        category === item
                          ? 'border-[#243C7B] text-[#243C7B]'
                          : 'border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={item}
                        checked={category === item}
                        onChange={(e) => setCategory(e.target.value)}
                      />
                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm">Cover Image</label>

                <label className="flex items-center justify-center gap-2 border rounded-lg p-3 cursor-pointer text-sm text-gray-500">
                  <FaRegImage />
                  {coverImage ? coverImage.name : 'Upload Cover Image'}

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setCoverImage(e.target.files[0])}
                  />
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm">HTML Content</label>

                <p className="text-xs text-gray-400">
                  Use the toolbar to format your text with bold, italic, headers, lists, and more.
                </p>

                <TextEditor
                  value={description}
                  onChange={setDescription}
                />
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-[#243C7B] text-white rounded-lg py-3 mt-2"
              >
                Next
              </button>

            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="flex flex-col min-h-[420px]">

              <div className="flex flex-col gap-2">
                <label className="text-sm">Gallery Images</label>

                <p className="text-xs text-gray-400">
                  JPG/PNG, multiple allowed
                </p>

                <label className="h-44 border rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer text-gray-500">
                  <LuUpload size={25} />

                  <span className="text-xs">
                    Upload an image
                  </span>

                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      const files = Array.from(e.target.files)

                      const newImages = files.map((file) => ({
                        file,
                        preview: URL.createObjectURL(file)
                      }))

                      setGalleryImages((prev) => [...prev, ...newImages])

                      e.target.value = ''
                    }}
                  />
                </label>

                {galleryImages.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mt-4">

                    {galleryImages.map((image, index) => (
                      <div key={index} className="relative">

                        <img
                          src={image.preview}
                          alt=""
                          className="w-full h-24 object-cover rounded-lg"
                        />

                        <button
                          type="button"
                          onClick={() => {
                            URL.revokeObjectURL(image.preview)

                            setGalleryImages((prev) =>
                              prev.filter((_, i) => i !== index)
                            )
                          }}
                          className="absolute top-1 right-1 bg-white rounded-full p-1 text-red-500"
                        >
                          <IoClose size={16} />
                        </button>

                      </div>
                    ))}

                  </div>
                )}
              </div>

              <div className="flex justify-between mt-auto pt-8">
                <button
                  onClick={onClose}
                  className="px-6 py-2 text-sm text-gray-600"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="bg-[#243C7B] text-white rounded-lg px-8 py-3 text-sm"
                >
                  Submit
                </button>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  )
}

export default CreatePost
