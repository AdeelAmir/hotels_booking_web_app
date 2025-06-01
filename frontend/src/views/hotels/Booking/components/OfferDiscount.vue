<template>
  <b-col md="6" xl="12">
    <b-card no-body class="shadow">
      <b-card-header class="border-bottom">
        <div class="cardt-title">
          <h5 class="mb-0">Offer &amp; Discount</h5>
        </div>
      </b-card-header>
      <b-card-body>
        <div class="bg-light rounded-2 p-3">
          <div class="form-check form-check-inline mb-0">
            <input
              class="form-check-input"
              type="radio"
              name="discountOptions"
              id="discount1"
              value="option1"
              checked
            />
            <label class="form-check-label h5 mb-0" for="discount1">GSTBOOK</label>
            <p class="mb-1 small">Congratulations! You have saved $230 with GSTBOOK.</p>
            <h6 class="mb-0 text-success">-$230</h6>
          </div>
        </div>

        <div class="input-group mt-3">
          <b-form-input placeholder="Coupon code" />
          <b-button variant="primary">Apply</b-button>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>
