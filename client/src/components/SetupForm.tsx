import { useForm, Controller } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import Multiselect from "multiselect-react-dropdown";
import { updateSetupData } from "../redux/setupSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export const SetupForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const setup = useSelector((state: RootState) => state.setup);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm({ defaultValues: setup });

  function onSubmit(values) {
    console.log({ values });
    values.currency = values.currency?.value ?? "";
    dispatch(updateSetupData(values));
  }

  const currencyOptions = [
    { label: "USD", value: "USD" },
    { label: "EUR", value: "EUR" },
    { label: "JPY", value: "JPY" },
    { label: "GBP", value: "GBP" },
    { label: "AUD", value: "AUD" },
    { label: "CAD", value: "CAD" },
    { label: "CHF", value: "CHF" },
    { label: "CNY", value: "CNY" },
    { label: "SEK", value: "SEK" },
    { label: "NZD", value: "NZD" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors}>
        <FormLabel htmlFor="name">Polling Enabled?</FormLabel>
        <Checkbox
          id="pollingEnabled"
          checked={Boolean(setup.pollingEnabled)}
          {...register("pollingEnabled")}
        />
        <FormLabel htmlFor="pollingIntervalInSec">Polling Interval</FormLabel>
        <Input
          id="pollingIntervalInSec"
          //   placeholder='Polling Interval'
          type="number"
          {...register("pollingIntervalInSec")}
        />

        <FormLabel htmlFor="name">Tracked Crypto Codes</FormLabel>
        <Controller
          control={control}
          name="trackedCryptoCodes"
          render={({ field: { value, onChange } }) => (
            <Multiselect
              options={setup.trackedCryptoCodes} //TODO: Fetch All Tracked Crypto Codes
              isObject={false}
              showCheckbox
              hidePlaceholder={true}
              closeOnSelect={false}
              onSelect={onChange}
              onRemove={onChange}
              selectedValues={setup.trackedCryptoCodes} //TODO: localSetup.trackedCryptoCodes
            />
          )}
        />
        <FormLabel htmlFor="currency">Currency</FormLabel>
        <Controller
          control={control}
          name="currency"
          rules={{ required: "Enter Currency" }}
          render={({
            field: { onChange, value, onBlur, name, ref },
            fieldState: { error },
          }) => (
            <Select
              // isMulti
              name={name}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              options={currencyOptions} //TODO: Move it to a state
              placeholder="Currency"
              closeMenuOnSelect
            />
          )}
        />
        <FormErrorMessage>
          {errors.currency && errors.currency.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Save Setup
      </Button>
    </form>
  );
};
