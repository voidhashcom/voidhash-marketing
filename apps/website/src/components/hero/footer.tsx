import { Logo } from '../logo';

export function Footer() {
  return (
    <footer className="flex w-full max-w-7xl flex-col md:mx-auto">
      <div className="w-full">
        <div className="flex w-full justify-between px-4 py-12">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Voidhash s.r.o. All rights
            reserved.
          </p>
          <div className="flex gap-9 ">
            <a
              className="text-muted-foreground hover:text-foreground"
              href="https://x.com/voidhashcom"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="h-6"
                fill="none"
                viewBox="0 0 1200 1227"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X.com (Twitter) Logo</title>
                <path
                  d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="text-muted-foreground hover:text-foreground"
              href="https://github.com/voidhashcom/voidhash"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                className="h-6"
                fill="none"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub Logo</title>
                <path
                  clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  transform="scale(64)"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="pb-12">
          <Logo className="h-auto w-full text-muted dark:text-muted" />
        </div>
      </div>
    </footer>
  );
}
