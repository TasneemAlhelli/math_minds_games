// Equation Class
class Equation {
  static easy = []
  static intermediate = []
  static advance = []

  constructor(equation, options, correct, level) {
    this.equation = equation
    this.options = options
    this.correct = correct

    switch (level) {
      case 'easy':
        this.points = 5
        Equation.easy.push(this)
        break
      case 'intermediate':
        this.points = 10
        Equation.intermediate.push(this)
        break
      case 'advance':
        this.points = 10
        Equation.advance.push(this)
        break
      default:
    }
  }
}

// Generate Easy Equations
new Equation('15 ÷ 5 × 4', [12, 15, 16, 9], 12, 'easy')
new Equation('1 + 3 × 2', [11, 7, 5, 10], 7, 'easy')
new Equation('3 - 1 + 12', [11, 12, 14, 18], 14, 'easy')
new Equation('17 - 5 - 2', [10, 13, 12, 9], 10, 'easy')
new Equation('9 - 32 ÷ 4', [2, 1, 3, 5], 1, 'easy')
new Equation('6 ÷ 3 - 1', [5, 3, 2, 1], 1, 'easy')
new Equation('10 ÷ 2 + 4', [7, 9, 6, 5], 9, 'easy')
new Equation('6 + 3 × 2', [12, 15, 9, 18], 12, 'easy')
new Equation('15 - 3 ÷ 3', [14, 5, 10, 8], 14, 'easy')
new Equation('9 ÷ 3 + 5', [8, 6, 7, 10], 8, 'easy')
new Equation('10 ÷ 5 × 4', [2, 3, 8, 4], 8, 'easy')
new Equation('30 ÷ 6 × 3', [5, 6, 4, 15], 15, 'easy')
new Equation('22 ÷ 2 × 2', [22, 11, 9, 8], 22, 'easy')
new Equation('12 ÷ 4 × 2', [2, 6, 3, 8], 6, 'easy')
new Equation('14 ÷ 7 × 3', [2, 3, 6, 9], 6, 'easy')
new Equation('(3 + 3) × 5', [40, 20, 30, 29], 30, 'easy')
new Equation('(17 - 13) × 3', [13, 8, 12, 16], 12, 'easy')
new Equation('(8 + 3) × 2', [15, 22, 26, 30], 22, 'easy')
new Equation('12 ÷ (5 + 1)', [2, 3, 4, 5], 2, 'easy')
new Equation('(15 - 7) × 3', [18, 21, 24, 27], 24, 'easy')
new Equation('9 + (5 × 2)', [14, 19, 24, 29], 19, 'easy')
new Equation('(20 ÷ 5) × 3', [6, 9, 12, 15], 12, 'easy')
new Equation('18 - (9 + 2)', [5, 7, 9, 11], 7, 'easy')
new Equation('(16 ÷ 4) × 5', [12, 16, 20, 24], 20, 'easy')
new Equation('14 - (6 + 3)', [2, 5, 8, 11], 5, 'easy')
new Equation('(24 ÷ 6) × 2 ', [4, 6, 8, 10], 8, 'easy')
new Equation('(21 - 10) × 2', [22, 24, 26, 28], 22, 'easy')
new Equation('11 + (3 × 2)', [17, 20, 23, 26], 17, 'easy')
new Equation('(30 ÷ 5) × 2', [8, 10, 12, 14], 12, 'easy')
new Equation('25 - (12 + 4)', [9, 12, 15, 18], 9, 'easy')

// Generate Medium Equations
new Equation('48 ÷ 6 × 4', [32, 24, 2, 16], 32, 'intermediate')
new Equation('54 ÷ 9 × 3', [18, 12, 2, 7], 18, 'intermediate')
new Equation('80 ÷ 10 × 5', [20, 15, 30, 40], 40, 'intermediate')
new Equation('120 ÷ 12 × 6', [12, 16, 60, 30], 60, 'intermediate')
new Equation('176 ÷ 8 × 11', [222, 242, 262, 282], 242, 'intermediate')
new Equation('50 - 2 × (10 ÷ 2)', [30, 35, 40, 45], 40, 'intermediate')
new Equation('300 ÷ 15 × 10', [160, 180, 200, 220], 200, 'intermediate')
new Equation('(40 ÷ 5) × 6', [30, 36, 42, 48], 48, 'intermediate')
new Equation('(24 ÷ 4) + 6', [10, 12, 14, 16], 12, 'intermediate')
new Equation('8 × (4 - 2) + 5', [13, 15, 17, 21], 21, 'intermediate')
new Equation('(12 + 4) ÷ 4 × 2', [8, 9, 10, 11], 8, 'intermediate')
new Equation('(25 ÷ 5) × 4 - 3', [17, 19, 21, 23], 17, 'intermediate')
new Equation('35 - (6 ÷ 2) × 3', [22, 24, 26, 29], 29, 'intermediate')
new Equation('40 - 2 × (8 ÷ 2)', [32, 36, 40, 44], 32, 'intermediate')
new Equation('(32 ÷ 4) × 5', [26, 28, 40, 34], 40, 'intermediate')
new Equation('(21 - 10) × 3 + 2', [66, 35, 22, 16], 35, 'intermediate')
new Equation('9 × (2 + 1) - 4', [22, 23, 28, 31], 23, 'intermediate')
new Equation('(48 ÷ 6) × 2 + 1 ', [15, 16, 17, 18], 17, 'intermediate')
new Equation('(100 ÷ 5) × 14', [270, 280, 290, 300], 280, 'intermediate')
new Equation('135 - (27 ÷ 3) × 2', [125, 128, 252, 117], 117, 'intermediate')
new Equation('(15 ÷ 3) × 2 + 7', [14, 17, 18, 19], 17, 'intermediate')
new Equation('20 - (6 + 3) × 2', [2, 4, 6, 8], 2, 'intermediate')
new Equation('5 + (4 × 3) ÷ 2', [11, 13, 15, 17], 11, 'intermediate')
new Equation('36 ÷ (6 + 2) × 2', [20, 9, 12, 22], 20, 'intermediate')
new Equation('(40 ÷ 8) × 3 - 2', [15, 18, 12, 13], 13, 'intermediate')
new Equation('(11 + 5) ÷ 4 × 2', [8, 9, 10, 11], 8, 'intermediate')
new Equation('7 × (2 + 3 × 3)', [77, 105, 82, 97], 77, 'intermediate')
new Equation('6 + 3 × 4 ÷ 6', [8, 6, 9, 12], 8, 'intermediate')
new Equation('(10 ÷ 2 × 3) + 3', [18, 17, 16, 15], 18, 'intermediate')
new Equation('4 × (2 + 3) ÷ 4', [20, 5, 8, 19], 5, 'intermediate')

// Generate Hard Equations
new Equation('42 ÷ 7 × 4', [9, 15, 24, 12], 24, 'advance')
new Equation('60 ÷ 4 × 3', [30, 35, 40, 45], 45, 'advance')
new Equation('(15 + 3) × (4 - 2)', [36, 30, 24, 18], 36, 'advance')
new Equation('7 × (4 + 3) - 5', [40, 42, 44, 48], 44, 'advance')
new Equation('(20 - 8) × (3 + 2)', [60, 70, 80, 90], 60, 'advance')
new Equation('14 + (6 × 2) ÷ (3 - 1)', [16, 18, 20, 22], 20, 'advance')
new Equation('(25 ÷ 5) × (4 - 3)', [2, 3, 4, 5], 5, 'advance')
new Equation('(6 × 3) + 8 ÷ (2 - 4)', [12, 14, 16, 18], 14, 'advance')
new Equation('24 - (9 + 2) ÷ (2 - 1)', [11, 14, 15, 16], 11, 'advance')
new Equation('(11 + 5) ÷ (4 × 2)', [1, 2, 3, 4], 2, 'advance')
new Equation('8 × (4 - 2) + 5', [15, 17, 21, 19], 21, 'advance')
new Equation('20 - (6 + 3) × (2 - 1)', [11, 12, 13, 14], 11, 'advance')
new Equation('5 + (4 × 3) ÷ (2 - 1)', [17, 19, 21, 23], 17, 'advance')
new Equation('(30 ÷ 6) × (3 - 2) - 2', [3, 5, 7, 9], 3, 'advance')
new Equation('(10 × 2) - 4 ÷ (2 + 2)', [15, 17, 19, 21], 19, 'advance')
new Equation('(21 - 10) × (3 + 2) + 2', [14, 17, 20, 21], 17, 'advance')
new Equation('(35 ÷ 5) × (3 - 2)', [7, 5, 3, 1], 7, 'advance')
new Equation('9 × (2 + 1) - (4 + 2)', [15, 18, 21, 24], 21, 'advance')
new Equation('30 - (12 + 4) ÷ (2 + 2)', [16, 18, 20, 26], 26, 'advance')
new Equation('(7 × 4) - 2 + (5 - 3)', [24, 28, 32, 36], 28, 'advance')
new Equation('(28 - 14) × (2 + 3) + 3', [73, 75, 83, 85], 73, 'advance')
new Equation('14 + (6 ÷ 2) × (3 + 1)', [17, 20, 23, 26], 26, 'advance')
new Equation('(40 ÷ 8) × (3 - 2) - 2 ', [3, 5, 7, 9], 3, 'advance')
new Equation('6 × (5 - 2) + (4 + 1)', [26, 19, 23, 25], 23, 'advance')
new Equation('20 - (9 + 3) ÷ (2 - 1)', [6, 8, 10, 12], 8, 'advance')
new Equation('(18 + 4) ÷ (7 + 4) + 3', [4, 5, 6, 7], 5, 'advance')
new Equation('(48 ÷ 6) × (2 + 1) + 1', [25, 26, 27, 28], 25, 'advance')
new Equation('125 - 2 × (25 ÷ 5)', [115, 116, 117, 118], 115, 'advance')
new Equation('(100 ÷ 5) × 14', [279, 280, 290, 300], 280, 'advance')
new Equation('135 - (27 ÷ 3) × 2', [115, 116, 117, 118], 117, 'advance')
