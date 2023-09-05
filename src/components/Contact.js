import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 text-center pt-8">
        Contact US!
      </h1>
      <div className="flex items-center justify-center m-6 p-6">
        <div class=" w-[30%] h-[30%] border rounded overflow-hidden shadow-lg">
          <div className="flex items-center justify-center">
            <img
              class="w-72 "
              src="https://static.vecteezy.com/system/resources/previews/011/381/911/original/male-customer-service-3d-cartoon-avatar-portrait-png.png"
              alt="contact_us"
            />
          </div>

          <div class="px-6 py-4">
            <form>
              <div className="flex justify-evenly">
                <input
                  type="text"
                  className="border border-black p-2 m-2 flex-row"
                  placeholder="name"
                />
                <input
                  type="text"
                  className="border border-black p-2 m-2"
                  placeholder="email"
                />
              </div>

              <input
                type="text"
                className="ml-10 mt-6 w-[455px] p-2 h-24 border border-black"
                placeholder="Type a message"
              />
              <div className="flex items-center justify-center mt-4">
                <button
                  onClick={() => {
                    alert("Thanks for your response!");
                  }}
                  className="w-24 p-2 m-2 bg-cyan-300 hover:bg-sky-500 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
