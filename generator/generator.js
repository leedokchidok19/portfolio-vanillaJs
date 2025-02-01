class PasswordGenerator {
  constructor() {
    this.form = document.querySelector('.password-form');
    this.output = document.querySelector('.password-output');
    this.copyBtn = document.querySelector('.copy-btn');
    this.lengthInput = document.getElementById('length');
    this.lengthOutput = this.lengthInput.previousElementSibling.querySelector('output');
    
    this.chars = {
      lower: 'abcdefghijklmnopqrstuvwxyz',
      upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      number: '0123456789',
      symbol: '!@#$%^&*()'
    };

    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.generatePassword();
    });

    this.copyBtn.addEventListener('click', () => this.copyPassword());
    
    this.lengthInput.addEventListener('input', () => {
      this.lengthOutput.textContent = this.lengthInput.value;
    });
  }

  getSelectedChars() {
    return Object.entries(this.chars)
      .filter(([key]) => document.getElementById(key).checked)
      .map(([, chars]) => chars)
      .join('');
  }

  generatePassword() {
    const selectedChars = this.getSelectedChars();
    
    if (!selectedChars) {
      alert('최소 하나의 옵션을 선택하세요');
      return;
    }

    const length = +this.lengthInput.value;
    const password = Array.from(
      { length }, 
      () => selectedChars[Math.floor(Math.random() * selectedChars.length)]
    ).join('');

    this.output.textContent = password;
  }

  async copyPassword() {
    const password = this.output.textContent;
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      this.copyBtn.textContent = '복사됨!';
      setTimeout(() => this.copyBtn.textContent = '복사', 1000);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  }
}

new PasswordGenerator();