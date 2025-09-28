export default function Screens() {
  return (
    <section id="screens" className="min-h-[140vh] bg-gray-50 flex items-center justify-center">
      <div className="max-w-5xl w-full px-6 grid md:grid-cols-2 gap-10">
        {/* Mockup frame */}
        <div className="mx-auto w-[320px] h-[660px] rounded-[42px] bg-black/90 p-4 shadow-2xl">
          <div className="w-full h-full rounded-[32px] bg-white/90 flex items-center justify-center text-gray-400">
            iPhone Mockup — drop screenshots later
          </div>
        </div>
        {/* Captions */}
        <div className="self-center">
          <h3 className="text-3xl font-bold mb-4">UI Preview</h3>
          <p className="text-gray-700 mb-3">Short caption about the screen here.</p>
          <p className="text-gray-700">We’ll wire a real carousel after content is ready.</p>
        </div>
      </div>
    </section>
  );
}
