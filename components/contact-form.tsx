"use client";

import { useRef, type FormEvent } from "react";

export function ContactForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const recipient = "shutang.oci@gmail.com";

  const open = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!recipient) return;
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject"));
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <button type="button" className="hero-action-link pointer-events-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#171715] px-6 py-3 text-[clamp(1.125rem,1.8vw,1.75rem)] text-[#687df0] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-colors hover:text-[#899dff]" onClick={open}>Contact
      <svg
        aria-hidden="true"
        className="h-[0.75em] w-[0.75em]"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 11 11 5M6 5h5v5" />
      </svg>
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby="contact-heading"
        className="contact-dialog pointer-events-auto fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-[28rem] overflow-hidden border-0 bg-[#171715]/85 p-0 text-white backdrop-blur-xl"
        onClose={() => { document.body.style.overflow = ""; }}
        onClick={(event) => { if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
        } }}
      >
        <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-8">
        <div className="mb-12 flex justify-start">
          <button type="button" onClick={close} className="contact-close inline-flex h-11 w-11 shrink-0 items-center justify-center border-0 bg-transparent text-white/70 hover:text-white" aria-label="Close contact form"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="h-7 w-7"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
        </div>
        <h2 id="contact-heading" className="mb-8 font-display text-h2">Contact me</h2>
        <form id="contact-message-form" onSubmit={submit} className="contact-form-layout space-y-6">
          <div className="grid gap-6">
            <label className="block text-small text-white/70"><span className="sr-only">Name</span><input placeholder="Name" name="name" autoComplete="name" required maxLength={120} className="contact-input" /></label>
            <label className="block text-small text-white/70"><span className="sr-only">Email</span><input placeholder="Email" name="email" type="email" autoComplete="email" required maxLength={254} className="contact-input" /></label>
          </div>
          <label className="block text-small text-white/70"><span className="sr-only">Subject</span><input placeholder="Subject" name="subject" required maxLength={200} className="contact-input" /></label>
          <label className="block text-small text-white/70"><span className="sr-only">Message</span><textarea placeholder="Message" name="message" required maxLength={5000} rows={7} className="contact-input resize-y" /></label>
          <p className="!mt-3 text-small text-white/40">Your email app will open with your message ready to send.</p>

        </form>
        </div>
          <div className="contact-send-bar">
            <button type="submit" form="contact-message-form" className="flex min-h-24 w-full items-center justify-center border-0 bg-[#101010] px-6 py-8 text-center text-xl text-[#687df0] transition-colors hover:bg-[#1a1a1a] hover:text-[#899dff]">
              Send Message
            </button>
          </div>
      </dialog>
    </>
  );
}
